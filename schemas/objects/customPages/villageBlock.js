export default {
  title: 'Bloc pour Villages des Sciences',
  name: 'villageBlock',
  type: 'object',
  fields: [
    {
      name: 'villageTitle',
      type: 'string',
      title: 'Titre de section',
    },
    { name: 'villageContent', type: 'text', title: 'Contenu de section' },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier l'encart Village des Sciences`,
      };
    },
  },
};
