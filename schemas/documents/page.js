export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [{ name: 'admin', title: '⚠ ADMIN (Ne pas modifier) ⚠' }],
  fields: [
    {
      name: 'pageContent',
      title: 'CONTENU DE PAGE',
      type: 'array',
      of: [
        { type: 'editorialPageBlock' },
        { type: 'contactPageBlock' },
        { type: 'covidPageBlock' },
        { type: 'scolairesPageBlock' },
        { type: 'homePageBlock' },
        { type: 'footerBlock' },
      ],
      options: {
        editModal: 'fullscreen',
        limit: 1,
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
