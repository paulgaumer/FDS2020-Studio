export default {
  title: 'Bloc question FAQ',
  name: 'faqQuestion',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
};
