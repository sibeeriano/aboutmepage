"use client";

import { useEffect, useState } from "react";
import { AsciiWordmark } from "./AsciiWordmark";

export function IntroSplash() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const closeSplash = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    window.setTimeout(() => setIsOpen(false), 560);
  };

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Portada de sib.dev"
      className={`intro-splash fixed inset-0 z-[100] flex min-h-dvh overflow-hidden bg-white text-black ${isLeaving ? "intro-splash--leaving" : ""}`}
    >
      <button
        type="button"
        autoFocus
        onClick={closeSplash}
        aria-label="Cerrar portada y entrar al portfolio"
        className="group absolute top-4 right-4 z-20 grid size-12 place-items-center border-2 border-[#00ed64] bg-white font-[family-name:var(--font-ubuntu)] text-2xl font-bold text-[#00684a] shadow-[3px_3px_0_#c8f6e4] transition hover:-translate-y-0.5 hover:bg-[#00ed64] hover:text-black active:translate-x-1 active:translate-y-1 active:shadow-none sm:top-6 sm:right-6 sm:size-14 sm:text-3xl"
      >
        <span aria-hidden="true" className="transition group-hover:rotate-90">
          ×
        </span>
      </button>

      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute top-[8%] left-[23%] h-[9%] w-[8%] bg-[#e3fcf7]" />
        <span className="absolute top-[13%] left-[31%] h-[17%] w-[11%] bg-[#c8f6e4]/70" />
        <span className="absolute top-[28%] right-[24%] h-[13%] w-[14%] bg-[#e3fcf7]" />
        <span className="absolute bottom-[10%] left-[7%] h-[9%] w-[23%] bg-[#c8f6e4]/60" />
        <span className="absolute bottom-0 left-[43%] h-[8%] w-[14%] bg-[#e3fcf7]" />
      </div>

      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-5 pb-[6vh] sm:px-10">
        <div className="intro-splash__wordmark relative w-fit max-w-full">
          <span className="absolute top-[1%] left-[4%] z-10 font-[family-name:var(--font-ubuntu)] text-[clamp(1.6rem,4vw,3.7rem)] leading-none font-bold tracking-[-0.055em] text-[#8fd8f7] lowercase sm:left-[17%]">
            the
          </span>
          <AsciiWordmark isLeaving={isLeaving} />
          <span className="mx-auto mt-7 block h-1 w-[62%] bg-[#8fd8f7] sm:mt-10" />
          <button
            type="button"
            onClick={closeSplash}
            className="mx-auto mt-10 block font-[family-name:var(--font-ubuntu)] text-xl font-bold tracking-[0.04em] text-[#00ed64] uppercase transition hover:scale-105 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#00ed64] sm:mt-14 sm:text-3xl"
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
