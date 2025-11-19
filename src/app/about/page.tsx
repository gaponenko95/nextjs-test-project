import { AboutPage } from "@/pages/about/AboutPage";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("metadata.about.title"),
    description: t("metadata.about.description"),
  };
}

export default function About() {
  return <AboutPage />;
}
