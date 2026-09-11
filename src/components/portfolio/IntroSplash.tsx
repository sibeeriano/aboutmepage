"use client";

import { useEffect, useRef, useState } from "react";
import { AsciiWordmark } from "./AsciiWordmark";

const INTRO_SEEN_KEY = "sib.dev:intro-seen";

export function IntroSplash() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const isLeavingRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_SEEN_KEY) === "1") {
      return;
    }
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissSplash();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const dismissSplash = () => {
    if (isLeavingRef.current) return;
    isLeavingRef.current = true;
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    setIsLeaving(true);
    window.setTimeout(() => setIsOpen(false), 560);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Portada de sib.dev"
      className={`intro-splash fixed inset-0 z-[100] flex min-h-dvh overflow-hidden bg-white text-black ${isLeaving ? "intro-splash--leaving" : ""}`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute top-[8%] left-[23%] h-[9%] w-[8%] bg-[#e3fcf7]" />
        <span className="absolute top-[13%] left-[31%] h-[17%] w-[11%] bg-[#c8f6e4]/70" />
        <span className="absolute top-[28%] right-[24%] h-[13%] w-[14%] bg-[#e3fcf7]" />
        <span className="absolute bottom-[10%] left-[7%] h-[9%] w-[23%] bg-[#c8f6e4]/60" />
        <span className="absolute bottom-0 left-[43%] h-[8%] w-[14%] bg-[#e3fcf7]" />
      </div>

      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-5 pb-[6vh] sm:px-10">
        <div className="intro-splash__wordmark relative w-fit max-w-full">
          <span
            aria-hidden="true"
            className="absolute z-10 -translate-y-[92%] font-[family-name:var(--font-causten)] text-[clamp(1.6rem,4vw,3.7rem)] leading-none font-medium tracking-[-0.055em] text-[#8fd8f7] lowercase"
            style={{
              left: "var(--wordmark-s-left, 4%)",
              top: "var(--wordmark-s-top, 1%)",
            }}
          >
            the
          </span>
          <AsciiWordmark isLeaving={isLeaving} />
          <span className="mx-auto mt-7 block h-1 w-[62%] bg-[#8fd8f7] sm:mt-10" />
          <button
            type="button"
            onClick={dismissSplash}
            className="mx-auto mt-10 block font-[family-name:var(--font-causten)] text-xl font-medium tracking-[0.04em] text-[#00ed64] uppercase transition hover:scale-105 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#00ed64] sm:mt-14 sm:text-3xl"
          >
            Entrar
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="absolute right-0 bottom-0 left-0 flex items-end gap-[6%]">
        <span className="h-[3px] flex-1 bg-[#8fd8f7]" />
        <span className="h-[3px] w-[18%] bg-[#8fd8f7]" />
      </div>
    </section>
  );
}
