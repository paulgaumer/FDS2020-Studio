export default {
  title: "Question d'association",
  name: 'associationTypeQuestion',
  type: 'object',
  fields: [
    {
      name: 'questionType',
      type: 'string',
      initialValue: 'associationType',
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
    },
    {
      name: 'options',
      title: 'Choix de réponse',
      type: 'array',
      of: [
        {
          type: 'associationTypeOption',
        },
      ],
      validation: (Rule) => Rule.required().error('Obligatoire').min(1),
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
