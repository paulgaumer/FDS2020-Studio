export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Paramètres du site',
  __experimental_actions: ['update', /* "create", "delete", */ 'publish'],
  fieldsets: [
    { name: 'instagramField', title: 'Instagram' },
    { name: 'covidField', title: 'Covid-19' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'showCovid',
      type: 'boolean',
      title: 'Afficher les informations Covid',
      fieldset: 'covidField',
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
  ],
};
