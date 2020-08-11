export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    { name: 'topSection', title: 'Haut de page' },
    { name: 'partnersSection', title: 'Partenaires' },
    { name: 'contactSection', title: 'Contact' },
  ],
  fields: [
    {
      name: 'pageName',
      title: 'Nom de la page',
      description: 'NE PAS MODIFIER!',
      type: 'string',
    },
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
      type: 'text',
      fieldset: 'topSection',
    },
    // Partners Section
    {
      name: 'partnersTitle',
      title: 'Titre',
      type: 'string',
      fieldset: 'partnersSection',
    },
    // Contact Section
    {
      name: 'contactContent',
      title: 'Contenu',
      type: 'text',
      fieldset: 'contactSection',
    },
  ],
};
