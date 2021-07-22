export default {
  title: 'Question de rédaction',
  name: 'inputTypeQuestion',
  type: 'object',
  fields: [
    {
      name: 'questionType',
      type: 'string',
      initialValue: 'inputType',
      hidden: true,
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'description',
      title: 'Description (optionnel)',
      type: 'blockContent',
      // validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'picture',
      title: 'Photo',
      type: 'array',
      of: [
        {
          type: 'mainImage',
        },
      ],
    },
    {
      name: 'answer',
      title: 'Réponse',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'answerDetails',
      title: 'Réponse détaillée (optionnel)',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
};
