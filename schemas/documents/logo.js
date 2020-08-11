export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.error('A remplir').required(),
    },
    {
      name: 'partners',
      title: 'Partenaires',
      description: `Ajouter un ou plusieurs tags décrivant les partenariats de cet acteur.`,
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
