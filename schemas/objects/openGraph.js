export default {
  title: 'Open Graph',
  name: 'openGraph',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      description: 'Moins de 60 caractères',
      validation: (Rule) => Rule.max(60).warning('Moins de 60 caractères'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Moins de 155 caractères',
      validation: (Rule) => Rule.max(155).warning('Moins de 155 caractères'),
    },
    {
      title: 'Mots-clés',
      name: 'keywords',
      type: 'string',
      description: 'Liste de mots-clés séparés par une virgule',
    },
    {
      title: 'Image',
      description:
        'Facebook recommande une taille de 2400x1260 ou au minimum 1200x630',
      name: 'image',
      type: 'image',
    },
    /*
    // You can add videos to Open Graph tags too
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video'
    }
    */
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route.slug.current',
      link: 'link',
    },
    prepare({ title, route, link }) {
      return {
        title,
        subtitle: route
          ? `Route: /${route}/`
          : link
          ? `External link: ${link}`
          : 'Not set',
      };
    },
  },
};
