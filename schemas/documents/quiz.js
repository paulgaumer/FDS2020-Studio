export default {
  name: 'quizByDepartment',
  title: 'Quiz',
  type: 'document',
  fields: [
    {
      name: 'department',
      title: 'Département',
      type: 'reference',
      to: {
        type: 'department',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answers',
      title: 'Réponses',
      type: 'array',
      of: [
        {
          name: 'answer',
          // title: 'Proposition',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'department.name',
    },
  },
};
