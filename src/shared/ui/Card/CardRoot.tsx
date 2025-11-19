import { cn } from "@/shared/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  disableHover?: boolean;
}

export const Card = ({
  className,
  disableHover = false,
  ...props
}: CardProps) => (
  <div
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      !disableHover &&
        "transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1",
      className
    )}
    {...props}
  />
);
