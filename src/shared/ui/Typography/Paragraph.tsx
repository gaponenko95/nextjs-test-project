import { cn } from "@/shared/lib/utils";
import { HTMLAttributes } from "react";

export const Paragraph = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-base leading-7", className)} {...props} />
);
