export default {
  title: 'Bloc pour page Editorial',
  name: 'editorialPageBlock',
  type: 'object',
  fieldsets: [
    { name: 'topSection', title: 'Haut de page' },
    { name: 'partnersSection', title: 'Partenaires' },
    { name: 'contactSection', title: 'Contact' },
  ],
  fields: [
    // Top Section
    {
      name: 'topTitle',
      title: 'Titre',
      type: 'string',
      fieldset: 'topSection',
    },
    {
      name: 'topContent',
      title: 'Contenu',
      fieldset: 'topSection',
      type: 'blockContent',
    },
    // Partners Section
    {
      name: 'partnersTitle',
      title: 'Titre de Section',
      type: 'string',
      fieldset: 'partnersSection',
    },
    {
      name: 'organizersTitle',
      title: 'Titre Logos Organisateurs',
      type: 'string',
      fieldset: 'partnersSection',
    },
    {
      name: 'logosOrganizers',
      title: 'Logos Organisateurs',
      type: 'array',
      of: [
        {
          name: 'logo',
          title: 'logo',
          type: 'reference',
          to: {
            type: 'logo',
          },
        },
      ],
      fieldset: 'partnersSection',
    },
    {
      name: 'coordinationTitle',
      title: 'Titre Logos Coordination',
      type: 'string',
      fieldset: 'partnersSection',
    },
    {
      name: 'logosCoordination',
      title: 'Logos Coordination',
      type: 'array',
      of: [
        {
          name: 'logo',
          title: 'logo',
          type: 'reference',
          to: {
            type: 'logo',
          },
        },
      ],
      fieldset: 'partnersSection',
    },
    // Contact Section
    {
      name: 'contactContent',
      title: 'Contenu',
      type: 'text',
      fieldset: 'contactSection',
    },
    // Previous Editions Section
    {
      name: 'previousEditions',
      title: 'Photos des Editions Précédentes',
      type: 'array',
      of: [
        {
          type: 'mainImage',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Editorial`,
      };
    },
  },
};
