export default {
  title: 'Bloc pour page Scolaires',
  name: 'scolairesPageBlock',
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
    {
      name: 'logosList',
      title: 'Logos Partenaires Scolaires',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'logo',
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Scolaires`,
      };
    },
  },
};
