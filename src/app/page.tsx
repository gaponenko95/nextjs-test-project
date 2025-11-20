import { getHomeHero, getHomeFeatures } from "@/shared/api/home";
import {
  Title,
  Paragraph,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("metadata.home.title"),
    description: t("metadata.home.description"),
  };
}

export default async function Home() {
  const t = await getTranslations();
  const [hero, features] = await Promise.all([
    getHomeHero(),
    getHomeFeatures(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Title level={1} className="mb-4">
          {t(hero.titleKey)}
        </Title>
        <Paragraph className="text-lg text-muted-foreground">
          {t(hero.subtitleKey)}
        </Paragraph>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.titleKey}>
            <CardHeader>
              <CardTitle>{t(feature.titleKey)}</CardTitle>
            </CardHeader>
            <CardContent>
              <Paragraph>{t(feature.descriptionKey)}</Paragraph>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
