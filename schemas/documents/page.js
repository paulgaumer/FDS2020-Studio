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
        { type: 'multimediaPageBlock' },
        { type: 'eventsIndexPageBlock' },
        { type: 'mentionsLegalesPageBlock' },
        { type: 'homePageBlock' },
        { type: 'featuredBlock' },
        { type: 'villageBlock' },
        { type: 'footerBlock' },
        { type: 'quiz21ConditionsPageBlock' },
      ],
      options: {
        editModal: 'fullscreen',
      },
      validation: (Rule) => Rule.required().min(1).max(1),
    },
    {
      name: 'pageName',
      title: 'Nom de la page',
      type: 'string',
      fieldset: 'admin',
    },
  ],
};
