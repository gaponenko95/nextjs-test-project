import { cn } from "@/shared/lib/utils";
import { HTMLAttributes } from "react";

export const CardDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);
