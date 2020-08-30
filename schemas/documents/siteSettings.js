export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Paramètres du site',
  __experimental_actions: ['update', /* "create", "delete", */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
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
