export default {
  title: 'Bloc texte & image',
  name: 'featureDesc',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feature',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Description`,
      };
    },
  },
};
