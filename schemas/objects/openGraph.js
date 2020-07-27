export default {
  title: 'Open Graph',
  name: 'openGraph',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      description: 'Attention! Ceci remplacera la titre de la page.',
      validation: (Rule) => Rule.max(60).warning('Moins de 60 caractères'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Moins de 155 caractères'),
    },
    {
      title: 'Image',
      description: 'Facebook recommande une taille de 1200x630',
      name: 'image',
      type: 'mainImage',
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
