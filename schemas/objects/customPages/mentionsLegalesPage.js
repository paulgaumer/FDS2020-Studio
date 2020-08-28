export default {
  title: 'Bloc pour page Mentions Légales',
  name: 'mentionsLegalesPageBlock',
  type: 'object',
  fields: [
    {
      name: 'topTitle',
      title: 'Titre de haut de page',
      type: 'string',
    },
    {
      name: 'contentBlock',
      title: 'Contenu Texte',
      type: 'blockContent',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Mentions Légales`,
      };
    },
  },
};
