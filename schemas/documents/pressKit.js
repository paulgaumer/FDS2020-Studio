export default {
  name: 'pressKit',
  title: 'Press Kit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'file',
      title: 'Document',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
