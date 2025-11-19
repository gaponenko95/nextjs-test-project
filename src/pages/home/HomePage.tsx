import { getTranslations } from "next-intl/server";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Title,
  Paragraph,
} from "@/shared/ui";
import { hero, features } from "./model/home.mock";

export const HomePage = async () => {
  const t = await getTranslations();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Title level={1} className="mb-4">
          {t(hero.titleKey)}
        </Title>
        <Paragraph className="text-lg text-muted-foreground">
          {t(hero.subtitleKey)}
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
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
};
