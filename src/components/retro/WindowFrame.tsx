import { type ReactNode } from "react";

export function WindowFrame({ children }: { children: ReactNode }) {
  return (
    <div className="border-4 border-[#84e084] bg-[#84e084] p-2">
      <div className="border-2 border-black bg-white shadow-win95-lg">
        {children}
      </div>
    </div>
  );
}

export function WindowTitleBar({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-black bg-[#c0c0c0] px-2 py-1 shadow-win95">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <span className="size-3 rounded-sm border border-black bg-[#ff8080]" />
          <span className="size-3 rounded-sm border border-black bg-[#ffff80]" />
          <span className="size-3 rounded-sm border border-black bg-[#80ff80]" />
        </div>
        <span className="font-head text-sm font-bold">{title}</span>
      </div>
      {children}
    </div>
  );
}
