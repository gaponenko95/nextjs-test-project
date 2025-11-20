export const getHomeHero = async () => {
  return {
    titleKey: "home.title",
    subtitleKey: "home.subtitle",
  };
};

export const getHomeFeatures = async () => {
  return [
    {
      titleKey: "home.feature1Title",
      descriptionKey: "home.feature1Description",
    },
    {
      titleKey: "home.feature2Title",
      descriptionKey: "home.feature2Description",
    },
    {
      titleKey: "home.feature3Title",
      descriptionKey: "home.feature3Description",
    },
  ];
};
