"use client";

import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";
import { HTMLAttributes } from "react";

interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: (values: TFieldValues) => void;
  children: React.ReactNode;
}

export const Form = <TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<TFieldValues>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
