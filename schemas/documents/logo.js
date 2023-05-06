export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  orderings: [
    {
      title: 'Nom',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'partners',
      title: 'Régions Partenaires',
      description: `Ajouter un ou plusieurs tags décrivant les régions partenaires de cet acteur, afin de faire apparaitre son logo sur les pages régionales`,
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'department',
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'width',
      title: 'Largeur',
      type: 'number',
      description: 'Largeur de l\'image en pixels',
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
