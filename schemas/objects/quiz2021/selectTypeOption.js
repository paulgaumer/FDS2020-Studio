export default {
  title: 'Option',
  name: 'selectTypeOption',
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
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'description',
      title: 'Description (optionnel)',
      type: 'blockContent',
    },
    {
      name: 'picture',
      title: 'Photo',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      answer: 'answer',
    },
    prepare(selection) {
      const { title, answer } = selection;
      return {
        title: `${title} ${answer ? '  ✅' : ''}`,
      };
    },
  },
};
