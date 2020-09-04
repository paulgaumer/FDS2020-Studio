export default {
  title: 'Bloc pour page Contact',
  name: 'contactPageBlock',
  type: 'object',
  fieldsets: [{ name: 'contactPressField', title: 'Bloc Contact Press' }],
  fields: [
    {
      name: 'topTitle',
      title: 'Titre de haut de page',
      type: 'string',
    },
    {
      name: 'topContent',
      title: 'Contenu',
      type: 'blockContent',
    },
    {
      name: 'pressTitle',
      title: 'Titre de Section Presse',
      type: 'string',
    },
    {
      name: 'contactTitle',
      title: 'Titre de bloc Contact Presse',
      type: 'string',
      fieldset: 'contactPressField',
    },
    {
      name: 'pressContact',
      type: 'pressContact',
      title: 'Contact',
      fieldset: 'contactPressField',
    },
    {
      name: 'resourceTitle',
      title: 'Titre de bloc Ressources',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Contact`,
      };
    },
  },
};
