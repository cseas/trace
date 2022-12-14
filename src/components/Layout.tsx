import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="grid h-14 grid-cols-12 place-items-center bg-mauve-12">
        <h1 className="col-span-2 text-mauve-1">Hypertrace</h1>
        <h1 className="col-span-1 text-mauve-1">Time Range</h1>
        <h1 className="col-span-1 text-mauve-1">Refresh</h1>
      </div>
      {children}
    </>
  );
}
