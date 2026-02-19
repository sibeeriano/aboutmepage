import { type ReactNode } from "react";

export function WindowFrame({ children }: { children: ReactNode }) {
  return (
    <div className="border-2 border-[#84e084] bg-[#84e084] p-1 sm:border-4 sm:p-2">
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
    <div className="sticky top-0 z-50 flex flex-col-reverse gap-2 border-b-2 border-black bg-[#c0c0c0] px-2 py-1 shadow-win95 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
      <div className="flex shrink-0 gap-1 sm:gap-2">{children}</div>
      <div className="flex min-w-0 items-center justify-end gap-2">
        <span className="truncate font-head text-xs font-bold sm:text-sm">{title}</span>
        <div className="flex shrink-0 gap-1">
          <span className="size-3 rounded-sm border border-black bg-[#ff8080]" />
          <span className="size-3 rounded-sm border border-black bg-[#ffff80]" />
          <span className="size-3 rounded-sm border border-black bg-[#80ff80]" />
        </div>
      </div>
    </div>
  );
}
