"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "@/entities/User";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/ui";

export const LoginForm = () => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useUserStore();

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: t("login.errors.requiredEmail") })
      .email({ message: t("login.errors.invalidEmail") }),
    password: z
      .string()
      .min(1, { message: t("login.errors.requiredPassword") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const success = login(values.email, values.password);
    if (success) {
      const to = searchParams?.get("to") ?? "/";
      router.push(to);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card disableHover className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">{t("login.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form form={form} onSubmit={onSubmit} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("login.emailLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("login.emailPlaceholder")}
                      error={!!form.formState.errors.email}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("login.passwordLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("login.passwordPlaceholder")}
                      error={!!form.formState.errors.password}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {t("login.submitButton")}
            </Button>
          </Form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground text-center w-full">
            {t("login.hint")}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
