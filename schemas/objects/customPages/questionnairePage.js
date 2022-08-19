export default {
  title: 'Bloc pour la page Appel à projets',
  name: 'questionnairePageBlock',
  type: 'object',
  fieldsets: [
    { name: 'heroFieldSet', title: 'Haut de Page' },
    { name: 'documentsFieldSet', title: 'Section documents' },
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
      name: 'image',
      title: 'Image',
      type: 'image',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'documentsTitle',
      title: 'Titre de section',
      type: 'string',
      fieldset: 'documentsFieldSet',
    },
    {
      name: 'documents',
      title: 'Documents',
      fieldset: 'documentsFieldSet',
      type: 'array',
      of: [
        {
          type: 'documentField',
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
        title: `Modifier la page Appel à projets`,
      };
    },
  },
};
