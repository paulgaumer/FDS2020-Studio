export default {
  title: 'Bloc pour la page Questionnaire',
  name: 'questionnairePageBlock',
  type: 'object',
  fieldsets: [
    { name: 'heroFieldSet', title: 'Haut de Page' },
    { name: 'processusFieldSet', title: 'A propos des étapes pour candidater' },
    { name: 'faqFieldSet', title: "FAQ" }
  ],
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'processusTitle',
      title: 'Titre de section',
      type: 'string',
      fieldset: 'processusFieldSet',
    },
    {
      name: 'steps',
      title: 'Etapes du processus',
      fieldset: 'processusFieldSet',
      type: 'array',
      of: [
        {
          type: 'text',
        },
      ],
    },
    {
      name: 'additionalInfos',
      title: 'Informations additionnelles',
      type: 'text',
    },
    {
      name: 'faq',
      title: 'Elements de FAQ',
      fieldset: 'faqFieldSet',
      type: 'array',
      of: [
        {
          type: 'faqQuestion',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la Homepage`,
      };
    },
  },
};
