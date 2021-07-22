export default {
  title: 'Option',
  name: 'associationTypeOption',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'answer',
      title: 'Bonne réponse',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
