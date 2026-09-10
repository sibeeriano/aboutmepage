import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CollapsibleProjectProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  detailHref: string;
  imageClassName?: string;
  children?: ReactNode;
};

export function CollapsibleProject({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  detailHref,
  imageClassName,
}: CollapsibleProjectProps) {
  return (
    <article className="min-h-[360px]">
      <Link
        href={detailHref}
        aria-label={`Abrir información completa de ${title}`}
        className="group flex h-full min-h-[360px] flex-col overflow-hidden border-2 border-black bg-white shadow-win95 transition-transform hover:-translate-y-1 hover:shadow-win95-lg"
      >
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
            className={cn(
              "object-contain p-5 transition-transform duration-300 group-hover:scale-[1.025]",
              imageClassName,
            )}
          />
        </div>

        <p className="border-t-2 border-black bg-[#e3fcf7] px-3 py-2 font-mono text-[10px] font-bold uppercase text-black/70 sm:text-xs">
          {subtitle}
        </p>

        <div className="flex w-full items-center justify-between border-t-2 border-black bg-[#00ed64] px-3 py-3 text-left font-head text-sm font-bold transition group-hover:bg-[#c8f6e4]">
          <span>+ INFO</span>
          <span aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  );
}
