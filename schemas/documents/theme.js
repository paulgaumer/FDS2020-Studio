export default {
  name: 'theme',
  title: 'Thème',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
