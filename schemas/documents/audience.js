export default {
  name: 'audience',
  title: 'Public',
  type: 'document',
  initialValue: { audienceEducation: false },
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'audienceEducation',
      title: 'Cible Scolaire',
      description: '',
      type: 'boolean',
    },
  ],
};
