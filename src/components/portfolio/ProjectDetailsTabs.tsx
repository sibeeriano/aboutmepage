"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

type ProjectDetail = {
  label: string;
  text: string;
  color: string;
};

type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectReferenceLink = {
  brand: string;
  label: string;
  href: string;
};

type ProjectDetailsTabsProps = {
  projectName: string;
  badge?: string;
  badgeClassName?: string;
  category: string;
  title: string;
  tagline?: string;
  description: string;
  details: ProjectDetail[];
  referenceLink?: ProjectReferenceLink;
  images: ProjectImage[];
  href: string;
  ctaLabel: string;
};

type TabName = "description" | "images";

export function ProjectDetailsTabs({
  projectName,
  badge,
  badgeClassName = "bg-[#ffdb33]",
  category,
  title,
  tagline,
  description,
  details,
  referenceLink,
  images,
  href,
  ctaLabel,
}: ProjectDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabName>("description");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const baseId = useId();
  const descriptionTabId = `${baseId}-description-tab`;
  const imagesTabId = `${baseId}-images-tab`;
  const descriptionPanelId = `${baseId}-description-panel`;
  const imagesPanelId = `${baseId}-images-panel`;

  const handleTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveTab(activeTab === "description" ? "images" : "description");
    }
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % images.length);
  };

  const activeImage = images[activeImageIndex];

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleLightboxKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveImageIndex(
          (current) => (current - 1 + images.length) % images.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((current) => (current + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleLightboxKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleLightboxKeyDown);
    };
  }, [images.length, isLightboxOpen]);

  return (
    <div className="flex min-h-full min-w-0 flex-col bg-white">
      <div
        role="tablist"
        aria-label={`Contenido del proyecto ${projectName}`}
        className="flex border-b-2 border-black bg-[#c0c0c0] px-2 pt-2"
      >
        <button
          id={descriptionTabId}
          type="button"
          role="tab"
          aria-selected={activeTab === "description"}
          aria-controls={descriptionPanelId}
          tabIndex={activeTab === "description" ? 0 : -1}
          onClick={() => setActiveTab("description")}
          onKeyDown={handleTabKeyDown}
          className={`relative -mb-0.5 border-2 border-black px-3 py-2 font-head text-xs font-bold transition sm:px-4 sm:text-sm ${
            activeTab === "description"
              ? "z-10 border-b-white bg-white shadow-win95"
              : "bg-[#d8d8d8] hover:bg-white"
          }`}
        >
          Descripción
        </button>
        <button
          id={imagesTabId}
          type="button"
          role="tab"
          aria-selected={activeTab === "images"}
          aria-controls={imagesPanelId}
          tabIndex={activeTab === "images" ? 0 : -1}
          onClick={() => setActiveTab("images")}
          onKeyDown={handleTabKeyDown}
          className={`relative -mb-0.5 ml-1 border-2 border-black px-3 py-2 font-head text-xs font-bold transition sm:px-4 sm:text-sm ${
            activeTab === "images"
              ? "z-10 border-b-white bg-white shadow-win95"
              : "bg-[#d8d8d8] hover:bg-white"
          }`}
        >
          Imágenes
          <span className="ml-1.5 border border-black bg-[#ffdb33] px-1 font-mono text-[10px]">
            {images.length}
          </span>
        </button>
      </div>

      {activeTab === "description" ? (
        <div
          id={descriptionPanelId}
          role="tabpanel"
          aria-labelledby={descriptionTabId}
          className="flex-1 p-5 sm:p-7 lg:p-9"
        >
          {badge && (
            <div
              className={`mb-4 inline-block border-2 border-black px-2 py-1 font-mono text-[10px] font-bold uppercase shadow-win95 ${badgeClassName}`}
            >
              {badge}
            </div>
          )}
          <Text className="font-mono text-xs font-bold uppercase tracking-widest text-[#00695c]">
            {category}
          </Text>
          <Text as="h3" className="mt-2 text-2xl font-bold sm:text-3xl">
            {title}
          </Text>
          {tagline && (
            <Text className="mt-2 font-head text-base font-bold text-[#00695c]">
              {tagline}
            </Text>
          )}
          <Text className="mt-4 leading-relaxed font-medium text-black/80">
            {description}
          </Text>

          {referenceLink && (
            <Link
              href={referenceLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-fit items-center gap-3 border-2 border-black bg-white px-3 py-2 shadow-win95 transition hover:-translate-y-0.5 hover:bg-[#f4f0ff] hover:shadow-win95-lg"
              aria-label={`${referenceLink.label} — abrir sitio oficial`}
            >
              <span
                aria-hidden="true"
                className="border-r-2 border-black pr-3 font-head text-base font-bold lowercase text-[#6e56cf]"
              >
                {referenceLink.brand}
              </span>
              <span className="font-mono text-[10px] font-bold uppercase sm:text-xs">
                {referenceLink.label} ↗
              </span>
            </Link>
          )}

          <dl className="mt-6 space-y-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="border-l-4 pl-3"
                style={{ borderColor: detail.color }}
              >
                <dt className="font-mono text-xs font-bold uppercase">{detail.label}</dt>
                <dd className="mt-1 font-medium">{detail.text}</dd>
              </div>
            ))}
          </dl>

          <Button asChild size="lg" className="mt-7 w-full justify-center sm:w-auto">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {ctaLabel} ↗
            </Link>
          </Button>
        </div>
      ) : (
        <div
          id={imagesPanelId}
          role="tabpanel"
          aria-labelledby={imagesTabId}
          className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <Text className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
              Capturas del producto
            </Text>
            <span
              aria-live="polite"
              className="shrink-0 border-2 border-black bg-[#ffdb33] px-2 py-1 font-mono text-[10px] font-bold shadow-win95"
            >
              {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <div
            role="region"
            aria-roledescription="carrusel"
            aria-label={`Capturas de ${projectName}`}
            className="border-2 border-black bg-[#c0c0c0] p-2 shadow-win95"
          >
            <div className="relative overflow-hidden border-2 border-black bg-white">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="group block w-full cursor-zoom-in"
                aria-label={`Ampliar captura: ${activeImage.caption}`}
              >
                <Image
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={1440}
                  height={900}
                  className="h-[260px] w-full object-contain object-center transition duration-300 group-hover:scale-[1.01] sm:h-[350px] lg:h-[390px]"
                  priority={activeImageIndex === 0}
                />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Ver captura anterior"
                    className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center border-2 border-black bg-white font-head text-xl font-bold shadow-win95 transition hover:bg-[#ffdb33] active:translate-x-0.5 active:translate-y-[calc(-50%+2px)] active:shadow-none"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Ver captura siguiente"
                    className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center border-2 border-black bg-white font-head text-xl font-bold shadow-win95 transition hover:bg-[#ffdb33] active:translate-x-0.5 active:translate-y-[calc(-50%+2px)] active:shadow-none"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="min-w-0 truncate font-mono text-[10px] font-bold uppercase sm:text-xs">
                {activeImage.caption}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="shrink-0 font-mono text-[10px] font-bold underline underline-offset-2 sm:text-xs"
              >
                Ampliar ⛶
              </button>
            </div>
          </div>

          {images.length > 1 && (
            <div
              className="flex min-w-0 max-w-full gap-2 overflow-x-auto pb-2"
              aria-label="Elegir una captura"
            >
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Ver captura ${index + 1}: ${image.caption}`}
                  aria-current={index === activeImageIndex ? "true" : undefined}
                  className={`shrink-0 border-2 border-black p-1 transition ${
                    index === activeImageIndex
                      ? "bg-[#ffdb33] shadow-win95"
                      : "bg-[#c0c0c0] opacity-70 hover:bg-white hover:opacity-100"
                  }`}
                >
                  <span className="relative block h-14 w-20 overflow-hidden border border-black bg-white sm:h-16 sm:w-24">
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span className="mt-1 block font-mono text-[9px] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsLightboxOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Galería ampliada de ${projectName}`}
            className="flex max-h-[96vh] w-full max-w-7xl flex-col border-2 border-black bg-[#c0c0c0] p-2 shadow-[8px_8px_0_#000]"
          >
            <div className="flex items-center justify-between gap-3 border-2 border-black bg-[#00695c] px-3 py-2 text-white">
              <span className="min-w-0 truncate font-mono text-xs font-bold uppercase sm:text-sm">
                {projectName} · {activeImage.caption}
              </span>
              <button
                type="button"
                autoFocus
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Cerrar galería"
                className="grid size-8 shrink-0 place-items-center border-2 border-black bg-white font-head text-lg font-bold text-black shadow-win95 hover:bg-[#ff8080] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                ×
              </button>
            </div>

            <div className="relative mt-2 flex min-h-0 flex-1 items-center justify-center overflow-hidden border-2 border-black bg-white">
              <Image
                key={`lightbox-${activeImage.src}`}
                src={activeImage.src}
                alt={activeImage.alt}
                width={1920}
                height={1200}
                className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Ver captura anterior"
                    className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center border-2 border-black bg-white font-head text-2xl font-bold shadow-win95 hover:bg-[#ffdb33] active:translate-x-0.5 active:translate-y-[calc(-50%+2px)] active:shadow-none sm:left-4"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Ver captura siguiente"
                    className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center border-2 border-black bg-white font-head text-2xl font-bold shadow-win95 hover:bg-[#ffdb33] active:translate-x-0.5 active:translate-y-[calc(-50%+2px)] active:shadow-none sm:right-4"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="mt-2 flex items-center gap-2 overflow-x-auto border-2 border-black bg-white p-2">
              <span
                aria-live="polite"
                className="mr-1 shrink-0 border-2 border-black bg-[#ffdb33] px-2 py-1 font-mono text-[10px] font-bold"
              >
                {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
              {images.map((image, index) => (
                <button
                  key={`lightbox-thumb-${image.src}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Ver captura ${index + 1}: ${image.caption}`}
                  aria-current={index === activeImageIndex ? "true" : undefined}
                  className={`shrink-0 border-2 border-black p-1 ${
                    index === activeImageIndex
                      ? "bg-[#ffdb33] shadow-win95"
                      : "bg-[#c0c0c0] opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="relative block h-12 w-16 overflow-hidden border border-black bg-white sm:h-14 sm:w-20">
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
