import type { ReactNode } from "react";

type CollapsibleProjectProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function CollapsibleProject({
  title,
  subtitle,
  children,
}: CollapsibleProjectProps) {
  return (
    <details className="group/project overflow-hidden border-2 border-black bg-white shadow-win95">
      <summary className="flex cursor-pointer list-none items-center gap-3 border-b-2 border-black bg-[#c0c0c0] px-3 py-2 transition hover:bg-[#d8d8d8] focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#00695c] [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="grid size-7 shrink-0 place-items-center border-2 border-black bg-[#ffdb33] font-head text-lg font-bold leading-none shadow-win95-inset"
        >
          <span className="group-open/project:hidden">+</span>
          <span className="hidden group-open/project:inline">−</span>
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-head text-sm font-bold sm:text-base">{title}</span>
          <span className="block truncate font-mono text-[10px] font-bold uppercase text-black/65 sm:text-xs">
            {subtitle}
          </span>
        </span>

        <span className="shrink-0 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] font-bold shadow-win95 sm:text-xs">
          <span className="group-open/project:hidden">EXPANDIR ↓</span>
          <span className="hidden group-open/project:inline">CONTRAER ↑</span>
        </span>
      </summary>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">{children}</div>
    </details>
  );
}
