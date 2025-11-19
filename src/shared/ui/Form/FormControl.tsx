"use client";

import { ComponentPropsWithoutRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { useFormField } from "@/shared/lib/form/useFormField";

export const FormControl = ({
  ...props
}: ComponentPropsWithoutRef<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
