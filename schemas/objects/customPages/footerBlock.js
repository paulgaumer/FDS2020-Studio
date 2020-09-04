export default {
  title: 'Bloc pour Footer',
  name: 'footerBlock',
  type: 'object',
  fields: [
    {
      name: 'logosRankTop',
      title: 'Logos Rangée du haut',
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
    {
      name: 'logosRankBottom',
      title: 'Logos Rangée du bas',
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
        title: `Modifier le Footer`,
      };
    },
  },
};
