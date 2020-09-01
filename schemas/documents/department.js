export default {
  name: 'department',
  title: 'Département',
  type: 'document',
  __experimental_actions: ['update', /* "create", "delete", */ 'publish'],
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
