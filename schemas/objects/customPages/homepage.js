export default {
  title: 'Bloc pour la Homepage',
  name: 'homePageBlock',
  type: 'object',
  fieldsets: [{ name: 'features', title: 'A propos de la Fête de la Science' }],
  fields: [
    {
      name: 'featuresTitle',
      title: 'Titre de section',
      type: 'string',
      fieldset: 'features',
    },
    {
      name: 'features',
      title: 'Points de description',
      fieldset: 'features',
      type: 'array',
      of: [
        {
          type: 'featureDesc',
        },
      ],
    },
    {
      name: 'featuresButton',
      title: 'Texte du bouton',
      type: 'string',
      fieldset: 'features',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la Homepage`,
      };
    },
  },
};
