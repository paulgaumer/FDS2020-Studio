export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [{ name: 'admin', title: 'ADMIN (Ne pas modifier)' }],
  fields: [
    {
      name: 'pageContent',
      title: 'CONTENU DE PAGE A MODIFIER',
      type: 'array',
      of: [{ type: 'editorialPageBlock' }, { type: 'contactPageBlock' }],
      options: {
        editModal: 'fullscreen',
      },
    },
    {
      name: 'pageName',
      title: 'Nom de la page',
      type: 'string',
      fieldset: 'admin',
    },
  ],
};
