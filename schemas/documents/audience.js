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
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'audienceEducation',
      title: 'Cible Scolaire',
      description: '',
      type: 'boolean',
    },
    {
      name: 'age',
      title: 'Age',
      description: 'Age indicatif, pour pouvoir trier ensuite sur le site',
      type: 'number',
    }
  ],
  orderings: [
    {
      title: 'Âge décroissant',
      name: 'ageDesc',
      by: [
        {field: 'age', direction: 'desc'}
      ]
    },
  ],
};
