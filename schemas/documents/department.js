export default {
  name: 'department',
  title: 'Département',
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
