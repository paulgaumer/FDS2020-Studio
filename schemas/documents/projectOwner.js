export default {
  name: 'projectOwner',
  title: 'Porteur de projet',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'website',
      title: 'Site internet',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Page Facebook',
      type: 'string',
    },
  ],
};
