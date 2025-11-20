"use client";

import { cn } from "@/shared/lib/utils";

type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
