export const getAboutHero = async () => {
  return {
    titleKey: "about.title",
    subtitleKey: "about.subtitle",
  };
};

export const getAboutSections = async () => {
  return [
    {
      titleKey: "about.techStackTitle",
      contentKey: "about.techStack",
    },
    {
      titleKey: "about.featuresTitle",
      contentKey: "about.features",
    },
  ];
};
