export default {
  name: 'route',
  title: 'Liens menu',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Libellé',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'hide',
      title: 'Masquer dans le menu',
      type: 'boolean',
    },
    {
      name: 'link',
      title: 'Lien',
      type: 'string',
      description: "/!\ Ne pas modifier",
    },
  ],
};
