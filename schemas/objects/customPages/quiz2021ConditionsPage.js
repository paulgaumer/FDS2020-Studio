export default {
  title: 'Bloc pour page Quiz 2021 Conditions',
  name: 'quiz21ConditionsPageBlock',
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
        title: `Modifier la page Quiz 21 Conditions`,
      };
    },
  },
};
