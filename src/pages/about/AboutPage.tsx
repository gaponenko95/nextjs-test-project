import { getTranslations } from "next-intl/server";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Title,
  Paragraph,
} from "@/shared/ui";
import { hero, description, sections } from "./model/about.mock";

export const AboutPage = async () => {
  const t = await getTranslations();

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
      <Paragraph className="mb-8 text-center max-w-3xl mx-auto">
        {t(description.textKey)}
      </Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <Card key={index}>
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
};
