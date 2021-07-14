export default {
  name: 'format',
  title: 'Format',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'formatIcon',
      title: 'Icone',
      type: 'image',
      description: "L'image doit être au format SVG, de couleur blanche",
    },
  ],
};
