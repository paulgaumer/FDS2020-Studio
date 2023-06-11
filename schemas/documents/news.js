export default {
  name: 'news',
  title: 'Actualités',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'date',
      title: 'Date de publication',
      type: 'date',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'showOnHomepage',
      title: "Afficher sur la page d'accueil",
      type: 'boolean',
    },
    {
      name: 'summary',
      title: "Résumé sur la page d'accueil",
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'image',
      title: "Image",
      type: 'image',
    },
    {
      name: 'content',
      title: "Contenu complet",
      type: 'blockContent',
    }
  ],
};
