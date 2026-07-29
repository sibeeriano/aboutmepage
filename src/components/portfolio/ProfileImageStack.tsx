"use client";

import Image from "next/image";
import { useState } from "react";

const profileCards = [
  {
    filename: "FACUNDO.JPG",
    src: "/fotoperfil.png",
    alt: "Retrato de Facundo Gabriel Vara",
    leftMeta: "BUENOS AIRES, AR",
    rightMeta: "C1+ ENGLISH",
  },
  {
    filename: "SIB.DEV.JPG",
    src: "/sib-dev-profile.png",
    alt: "Identidad visual de sib.dev",
    leftMeta: "SIB.DEV",
    rightMeta: "IDEAS → PRODUCTOS",
  },
];

export function ProfileImageStack() {
  const [frontCardIndex, setFrontCardIndex] = useState(0);

  const swapCards = () => {
    setFrontCardIndex((current) => (current + 1) % profileCards.length);
  };

  return (
    <div>
      <div className="relative mb-10 mr-7">
        {profileCards.map((card, index) => {
          const isFront = index === frontCardIndex;

          return (
            <button
              key={card.filename}
              type="button"
              onClick={swapCards}
              aria-label={
                isFront
                  ? `Mostrando ${card.filename}. Intercambiar con la otra imagen`
                  : `Traer ${card.filename} al frente`
              }
              className={`block w-full cursor-pointer text-left transition-all duration-300 ease-out focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#ffdb33] ${
                isFront
                  ? "relative z-20 translate-x-0 translate-y-0 rotate-0"
                  : "absolute inset-0 z-10 translate-x-6 translate-y-6 rotate-[1deg] hover:translate-x-7 hover:translate-y-7 sm:translate-x-7 sm:translate-y-7"
              }`}
            >
              <div className="border-2 border-black bg-[#c0c0c0] p-2 shadow-win95-lg">
                <div className="mb-2 flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="font-head text-xs font-bold">{card.filename}</span>
                  <span className="font-mono text-xs">{isFront ? "ACTIVE" : "READY"}</span>
                </div>

                <div className="border-2 border-black bg-white p-1 shadow-win95-inset">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={520}
                    height={520}
                    className="aspect-square w-full object-cover"
                    priority={index === 0}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between gap-3 bg-[#00695c] px-2 py-1 text-white">
                  <span className="font-mono text-xs font-bold">{card.leftMeta}</span>
                  <span className="font-mono text-[10px] sm:text-xs">{card.rightMeta}</span>
                </div>
              </div>
            </button>
          );
        })}

        <span className="sr-only" aria-live="polite">
          {profileCards[frontCardIndex].filename} está al frente
        </span>
      </div>

      <a
        href="#contacto"
        aria-label="Ir a la sección de contacto"
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-2 border-black bg-[#ffdb33] px-3 py-2 text-black shadow-win95 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-win95-lg"
      >
        <span className="font-head text-xs font-bold uppercase">¿Tenés una idea?</span>
        <span className="font-mono text-[10px] font-bold uppercase sm:text-xs">
          Contacto · facundog.vara@gmail.com ↓
        </span>
      </a>
    </div>
  );
}
