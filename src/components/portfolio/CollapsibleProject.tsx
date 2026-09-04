"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CollapsibleProjectProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  children: ReactNode;
};

export function CollapsibleProject({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageClassName,
  children,
}: CollapsibleProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeWindow = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <article className="flex min-h-[360px] flex-col overflow-hidden border-2 border-black bg-white shadow-win95 transition-transform hover:-translate-y-1 hover:shadow-win95-lg">
        <div className="flex items-center justify-between gap-3 border-b-2 border-black bg-[#d8eee5] px-3 py-2">
          <h3 className="font-head text-base font-bold">{title}</h3>
          <span className="font-mono text-[10px] font-bold uppercase text-black/60">
            Proyecto
          </span>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={cn("object-contain p-5", imageClassName)}
          />
        </div>

        <p className="border-t-2 border-black bg-[#e3fcf7] px-3 py-2 font-mono text-[10px] font-bold uppercase text-black/70 sm:text-xs">
          {subtitle}
        </p>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          className="flex w-full items-center justify-between border-t-2 border-black bg-[#00ed64] px-3 py-3 text-left font-head text-sm font-bold transition hover:bg-[#c8f6e4] focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#00684a]"
        >
          <span>+ INFO</span>
          <span aria-hidden="true">↗</span>
        </button>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#001e2b]/80 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeWindow();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="flex h-[92dvh] max-h-[860px] w-full max-w-7xl flex-col border-2 border-black bg-[#d8eee5] p-2 shadow-[8px_8px_0_#000]"
          >
            <div className="flex items-center justify-between gap-3 border-2 border-black bg-[#00684a] px-3 py-2 text-white">
              <span id={titleId} className="min-w-0 truncate font-head text-sm font-bold sm:text-base">
                {title} · {subtitle}
              </span>
              <button
                type="button"
                autoFocus
                onClick={closeWindow}
                aria-label={`Cerrar información de ${title}`}
                className="grid size-9 shrink-0 place-items-center border-2 border-black bg-white font-head text-lg font-bold text-black shadow-win95 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#00ed64] hover:shadow-win95-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                ×
              </button>
            </div>

            <div className="mt-2 min-h-0 flex-1 overflow-y-auto border-2 border-black bg-white lg:overflow-hidden">
              <div className="grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
