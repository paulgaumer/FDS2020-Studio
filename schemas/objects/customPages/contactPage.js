export default {
  title: 'Bloc pour page Contact',
  name: 'contactPageBlock',
  type: 'object',
  fields: [
    // Top Section
    {
      name: 'topTitle',
      title: 'Titre de haut de page',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Contact`,
      };
    },
  },
};
