"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";
import { useFormField } from "@/shared/lib/form/useFormField";

export const FormDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};
