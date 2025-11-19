"use client";

import { HTMLAttributes, useId } from "react";
import { cn } from "@/shared/lib/utils";
import { FormItemContext } from "@/shared/lib/form/form-context";

export const FormItem = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
};
