"use client";

import { useEffect, useRef } from "react";

type AsciiWordmarkProps = {
  isLeaving?: boolean;
};

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  startX: number;
  startY: number;
  delay: number;
  glyph: string;
  color: string;
};

const GLYPHS = ["0", "1", "+", "·", "/", "#", "<", ">", "{"];

const easeOutExpo = (value: number) =>
  value === 1 ? 1 : 1 - Math.pow(2, -10 * value);

export function AsciiWordmark({ isLeaving = false }: AsciiWordmarkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leavingRef = useRef(isLeaving);

  useEffect(() => {
    leavingRef.current = isLeaving;
  }, [isLeaving]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let particles: Particle[] = [];
    let startTime = performance.now();
    let exitStartedAt: number | null = null;
    let width = 0;
    let height = 0;
    let cellSize = 8;
    let pointerX = -1000;
    let pointerY = -1000;
    let reducedMotion = false;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion = motionQuery.matches;

    const buildParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      cellSize = width < 620 ? 5 : width < 1000 ? 7 : 8;

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const mask = document.createElement("canvas");
      mask.width = Math.round(width);
      mask.height = Math.round(height);
      const maskContext = mask.getContext("2d", { willReadFrequently: true });
      if (!maskContext) return;

      const computedFont = getComputedStyle(canvas).fontFamily;
      let fontSize = height * 0.78;
      maskContext.font = `700 ${fontSize}px ${computedFont}`;
      const measured = maskContext.measureText("sib.dev").width;
      if (measured > width * 0.98) {
        fontSize *= (width * 0.98) / measured;
      }

      maskContext.clearRect(0, 0, width, height);
      maskContext.font = `700 ${fontSize}px ${computedFont}`;
      maskContext.textAlign = "center";
      maskContext.textBaseline = "middle";
      maskContext.fillStyle = "#000";
      maskContext.fillText("sib.dev", width / 2, height / 2 + fontSize * 0.025);

      const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
      const nextParticles: Particle[] = [];

      for (let y = cellSize / 2; y < height; y += cellSize) {
        for (let x = cellSize / 2; x < width; x += cellSize) {
          const alphaIndex = (Math.floor(y) * mask.width + Math.floor(x)) * 4 + 3;
          if (pixels[alphaIndex] < 90) continue;

          const angle = Math.random() * Math.PI * 2;
          const distance = 45 + Math.random() * Math.max(width, height) * 0.45;
          nextParticles.push({
            x: x + Math.cos(angle) * distance,
            y: y + Math.sin(angle) * distance,
            originX: x,
            originY: y,
            startX: x + Math.cos(angle) * distance,
            startY: y + Math.sin(angle) * distance,
            delay: Math.random() * 420,
            glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
            color: Math.random() > 0.91 ? "#8fd8f7" : "#00ed64",
          });
        }
      }

      particles = nextParticles;
      startTime = performance.now();
      exitStartedAt = null;
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);

      if (leavingRef.current && exitStartedAt === null) {
        exitStartedAt = now;
        for (const particle of particles) {
          particle.startX = particle.x;
          particle.startY = particle.y;
          const angle = Math.atan2(particle.y - height / 2, particle.x - width / 2);
          particle.originX = particle.x + Math.cos(angle) * (90 + Math.random() * 260);
          particle.originY = particle.y + Math.sin(angle) * (90 + Math.random() * 190);
          particle.delay = Math.random() * 100;
        }
      }

      const elapsed = exitStartedAt === null ? now - startTime : now - exitStartedAt;
      const duration = exitStartedAt === null ? 1250 : 430;
      context.font = `700 ${Math.max(7, cellSize - 1)}px ui-monospace, SFMono-Regular, Consolas, monospace`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const rawProgress = reducedMotion
          ? 1
          : Math.min(1, Math.max(0, (elapsed - particle.delay) / duration));
        const progress = easeOutExpo(rawProgress);

        particle.x = particle.startX + (particle.originX - particle.startX) * progress;
        particle.y = particle.startY + (particle.originY - particle.startY) * progress;

        let drawX = particle.x;
        let drawY = particle.y;

        if (exitStartedAt === null && rawProgress > 0.82 && !reducedMotion) {
          const distanceX = drawX - pointerX;
          const distanceY = drawY - pointerY;
          const distanceSquared = distanceX * distanceX + distanceY * distanceY;
          const radius = 82;

          if (distanceSquared < radius * radius && distanceSquared > 0) {
            const distance = Math.sqrt(distanceSquared);
            const force = (1 - distance / radius) * 10;
            drawX += (distanceX / distance) * force;
            drawY += (distanceY / distance) * force;
          }

          drawY += Math.sin(now * 0.002 + index * 0.17) * 0.55;
          if (index % 31 === 0 && Math.floor(now / 130) % 2 === 0) {
            particle.glyph = GLYPHS[(index + Math.floor(now / 130)) % GLYPHS.length];
          }
        }

        context.globalAlpha = Math.min(1, rawProgress * 1.8);
        context.fillStyle = particle.color;
        context.fillText(particle.glyph, drawX, drawY);
      }

      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
    };

    const observer = new ResizeObserver(buildParticles);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    document.fonts.ready.then(() => {
      buildParticles();
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(draw);
    });

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <h1 className="sr-only">sib.dev</h1>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="intro-splash__ascii-wordmark block h-[clamp(9.5rem,25vw,19rem)] w-[min(94vw,82rem)] font-[family-name:var(--font-ubuntu)]"
      />
    </>
  );
}
