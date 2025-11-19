import { LoginForm } from "@/features/auth";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("metadata.login.title"),
    description: t("metadata.login.description"),
  };
}

export default function Login() {
  return <LoginForm />;
}
