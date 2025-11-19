import { cn } from "@/shared/lib/utils";
import { HTMLAttributes } from "react";

export const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);
