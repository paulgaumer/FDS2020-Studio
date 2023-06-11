export default {
  title: 'Chiffre clé',
  name: 'keyFigure',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'number',
      title: 'Chiffre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    }
  },
};
