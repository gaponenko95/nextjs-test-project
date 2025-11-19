import { cn } from "@/shared/lib/utils";
import { HTMLAttributes } from "react";

export const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);
