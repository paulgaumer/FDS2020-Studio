export default {
  title: "Bloc pour page Liste d'Evénements",
  name: 'eventsIndexPageBlock',
  type: 'object',
  fields: [
    {
      name: 'topTitle',
      title: 'Titre de haut de page',
      type: 'string',
    },
    {
      name: 'partnersTitle',
      title: 'Titre Section Partenaires',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Liste des Evénements`,
      };
    },
  },
};
