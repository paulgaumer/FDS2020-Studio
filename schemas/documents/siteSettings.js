export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Paramètres du site',
  __experimental_actions: ['update', /* "create", "delete", */ 'publish'],
  fieldsets: [
    {
      name: 'datesField',
      title: "Dates de l'événement",
      options: {
        columns: 2,
      },
    },
    { name: 'instagramField', title: 'Instagram' },
    { name: 'covidField', title: 'Covid-19' },
    { name: 'quizField', title: 'Quiz Popup' },
    { name: 'backgroundVideoField', title: "Video D'Arrière Plan" },
    { name: 'fdsLogoField', title: 'Logos Fête de la Science' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Début',
      fieldset: 'datesField',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'Fin',
      fieldset: 'datesField',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'showCovid',
      type: 'boolean',
      title: 'Afficher les informations Covid',
      fieldset: 'covidField',
    },
    {
      name: 'showQuiz',
      type: 'boolean',
      title: 'Afficher le Quiz',
      fieldset: 'quizField',
    },
    {
      name: 'instagramHashtag',
      type: 'string',
      title: 'Hashtag Instagram à afficher',
      fieldset: 'instagramField',
    },
    {
      name: 'instagramLink',
      type: 'url',
      title: 'Lien Instagram',
      fieldset: 'instagramField',
    },
    {
      title: 'Open Graph',
      name: 'openGraph',
      description:
        "Les meta tags par défaut sont définis ici. Ils définissent la manière dont le site apparait lors d'une recherche Google ou d'un partage sur les réseaux sociaux",
      type: 'openGraph',
    },
    {
      name: 'videoLink',
      type: 'string',
      title: 'Lien Vidéo',
      description: "Indiquer l'ID de la vidéo hébergée sur Google Drive",
      fieldset: 'backgroundVideoField',
    },
    {
      name: 'videoPlaceholder',
      type: 'image',
      title: 'Image Placeholder',
      description: "Image s'affichant pendant le chargement de la vidéo.",
      fieldset: 'backgroundVideoField',
    },
    {
      name: 'fdsLogoWhite',
      type: 'image',
      title: 'Logo Principal Blanc (ex: homepage)',
      description: 'Le format doit etre svg ou png',
      fieldset: 'fdsLogoField',
    },
    {
      name: 'fdsLogoBlack',
      type: 'image',
      title: 'Logo Principal Noir (ex: footer)',
      description: 'Le format doit etre svg ou png',
      fieldset: 'fdsLogoField',
    },
  ],
};
