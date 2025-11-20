"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/shared/lib/utils";

type SheetTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export const SheetTitle = ({ className, ...props }: SheetTitleProps) => (
  <DialogPrimitive.Title
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
);
