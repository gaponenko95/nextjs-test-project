import { cn } from "@/shared/lib/utils";
import { HTMLAttributes } from "react";

export const Text = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("text-sm", className)} {...props} />
);
