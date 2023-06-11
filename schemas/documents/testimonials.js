export default {
  name: 'testimonials',
  title: 'Témoignages',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Texte',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
  ],
};
