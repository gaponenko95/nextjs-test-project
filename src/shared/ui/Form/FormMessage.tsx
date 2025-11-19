"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";
import { useFormField } from "@/shared/lib/form/useFormField";

export const FormMessage = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
};
