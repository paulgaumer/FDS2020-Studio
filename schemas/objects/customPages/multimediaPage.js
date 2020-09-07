export default {
  title: 'Bloc pour page Multimedia',
  name: 'multimediaPageBlock',
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
        title: `Modifier la page Multimedia`,
      };
    },
  },
};
