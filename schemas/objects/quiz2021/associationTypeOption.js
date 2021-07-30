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
      name: 'picture',
      title: 'Photo',
      type: 'mainImage',
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
      image: 'picture',
    },
    prepare(selection) {
      const { title, image } = selection;
      return {
        title: title,
        media: image,
      };
    },
  },
};
