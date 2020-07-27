export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
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
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: `Important pour le SEO et l'accessibilité.`,
      validation: (Rule) => Rule.error('A remplir').required(),
      options: {
        isHighlighted: true,
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
