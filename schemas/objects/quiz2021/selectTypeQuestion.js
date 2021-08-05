export default {
  title: 'Question de sélection',
  name: 'selectTypeQuestion',
  type: 'object',
  fields: [
    {
      name: 'questionType',
      type: 'string',
      initialValue: 'selectType',
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
      name: 'options',
      title: 'Choix de réponse',
      type: 'array',
      of: [
        {
          type: 'selectTypeOption',
        },
      ],
      validation: (Rule) => Rule.required().error('Obligatoire').min(1),
    },
    // {
    //   name: 'answer',
    //   title: 'Réponse',
    //   type: 'string',
    //   validation: (Rule) => Rule.required().error('Obligatoire'),
    // },
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
