import { getAboutHero, getAboutSections } from "@/shared/api/about";
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
    title: t("metadata.about.title"),
    description: t("metadata.about.description"),
  };
}

export default async function About() {
  const t = await getTranslations();
  const [hero, sections] = await Promise.all([
    getAboutHero(),
    getAboutSections(),
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
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.titleKey}>
            <CardHeader>
              <CardTitle>{t(section.titleKey)}</CardTitle>
            </CardHeader>
            <CardContent>
              <Paragraph>{t(section.contentKey)}</Paragraph>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
