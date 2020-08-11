export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [{ name: 'admin', title: 'ADMIN (Ne pas modifier)' }],
  fields: [
    {
      name: 'pageContent',
      title: 'A MODIFIER',
      type: 'editorialPage',
    },
    {
      name: 'pageName',
      title: 'Nom de la page',
      type: 'string',
      fieldset: 'admin',
    },
  ],
};
