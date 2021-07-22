export default {
  name: 'quiz2021',
  type: 'document',
  title: 'Quiz 2021',
  fieldsets: [
    {
      name: 'welcomeField',
      title: 'Acceuil',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'questionsField',
      title: 'Liste de questions',
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
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'inputTypeQuestion' }, { type: 'selectTypeQuestion' }],
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
