export default {
  name: 'quiz2021',
  type: 'document',
  title: 'Quiz 2021',
  fieldsets: [
    {
      name: 'welcomeField',
      title: 'Acceuil',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'sponsorsField',
      title: 'Sponsors',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'questionsField',
      title: 'Liste de questions',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    { name: 'submitField', title: 'Données et candidature' },
  ],
  fields: [
    {
      name: 'sectionTitle',
      title: 'Titre du Quiz',
      type: 'string',
      initialValue: 'Quiz 2021',
      validation: (Rule) => Rule.required().error('Obligatoire'),
      fieldset: 'welcomeField',
    },
    {
      name: 'bannerImage',
      title: "Bannière d'accueil",
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'welcomeField',
    },
    {
      name: 'welcomeText',
      title: 'Texte de bienvenue',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Obligatoire'),
      fieldset: 'welcomeField',
    },
    {
      name: 'startButton',
      title: 'Bouton de lancement',
      type: 'string',
      initialValue: "C'est parti",
      validation: (Rule) => Rule.required().error('Obligatoire'),
      fieldset: 'welcomeField',
    },
    {
      name: 'titleSponsors',
      title: 'Titre',
      type: 'string',
      initialValue: 'Quiz 2021',
      fieldset: 'sponsorsField',
    },
    {
      name: 'logosSponsors',
      title: 'Logos Sponsors',
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
      fieldset: 'sponsorsField',
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        { type: 'inputTypeQuestion' },
        { type: 'selectTypeQuestion' },
        { type: 'associationTypeQuestion' },
      ],
      options: {
        editModal: 'fullscreen',
      },
      fieldset: 'questionsField',
    },
    {
      name: 'submitText',
      title: 'Texte de candidature',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Obligatoire'),
      fieldset: 'submitField',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'department.name',
  //   },
  // },
};
