"use client";

import { ComponentPropsWithoutRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/shared/lib/utils";
import { useFormField } from "@/shared/lib/form/useFormField";

export const FormLabel = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) => {
  const { error, formItemId } = useFormField();

  return (
    <LabelPrimitive.Root
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};
