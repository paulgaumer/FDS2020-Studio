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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'Fin',
      fieldset: 'datesField',
      validation: (Rule) => Rule.required(),
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
      type: 'url',
      title: 'Lien Vidéo',
      description:
        "Attention à l'origine de la vidéo! Les liens Youtube ne fonctionneront pas. Privilégier Cloudinary.",
      fieldset: 'backgroundVideoField',
    },
    {
      name: 'videoPlaceholder',
      type: 'image',
      title: 'Image Placeholder',
      description: "Image s'affichant pendant le chargement de la vidéo.",
      fieldset: 'backgroundVideoField',
    },
  ],
};
