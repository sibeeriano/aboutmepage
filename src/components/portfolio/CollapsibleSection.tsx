"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Text } from "@/components/retroui/Text";
import { cn } from "@/lib/utils";

type CollapsibleSectionProps = {
  id: string;
  indexLabel: string;
  title: string;
  backgroundClassName: string;
  accentClassName?: string;
  badge?: string;
  titleClassName?: string;
  withTopBorder?: boolean;
  children: ReactNode;
};

export function CollapsibleSection({
  id,
  indexLabel,
  title,
  backgroundClassName,
  accentClassName = "text-black/70",
  badge,
  titleClassName,
  withTopBorder = true,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    let highlightTimer: ReturnType<typeof setTimeout> | undefined;

    const revealTargetSection = () => {
      if (window.location.hash !== `#${id}`) {
        return;
      }

      setIsOpen(true);
      setIsHighlighted(false);
      window.requestAnimationFrame(() => setIsHighlighted(true));

      if (highlightTimer) {
        clearTimeout(highlightTimer);
      }

      highlightTimer = setTimeout(() => setIsHighlighted(false), 4000);
    };

    revealTargetSection();
    window.addEventListener("hashchange", revealTargetSection);

    return () => {
      window.removeEventListener("hashchange", revealTargetSection);
      if (highlightTimer) {
        clearTimeout(highlightTimer);
      }
    };
  }, [id]);

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 p-5 sm:p-8 lg:p-12",
        withTopBorder && "border-t-2 border-black",
        backgroundClassName,
        isHighlighted && "section-attention",
      )}
    >
      <details
        open={isOpen}
        onToggle={(event) => setIsOpen(event.currentTarget.open)}
        className="group/section"
      >
        <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 outline-none [&::-webkit-details-marker]:hidden">
          <span className="min-w-0">
            <Text
              className={cn(
                "font-mono text-xs font-bold uppercase tracking-widest",
                accentClassName,
              )}
            >
              {indexLabel}
            </Text>
            <Text
              as="h2"
              className={cn(
                "mt-1 text-2xl font-bold text-[#001e2b] sm:text-4xl",
                titleClassName,
              )}
            >
              {title}
            </Text>
          </span>

          <span className="flex w-full shrink-0 items-center gap-2">
            {badge && (
              <span className="hidden border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold shadow-win95 sm:inline-block">
                {badge}
              </span>
            )}
            <span className="ml-auto border-2 border-black bg-white px-3 py-2 font-mono text-[10px] font-bold text-black shadow-win95 transition group-hover/section:bg-[#e3fcf7] sm:text-xs">
              <span className="group-open/section:hidden">EXPANDIR ↓</span>
              <span className="hidden group-open/section:inline">CONTRAER ↑</span>
            </span>
          </span>
        </summary>

        <div className="mt-6">{children}</div>
      </details>
    </section>
  );
}
