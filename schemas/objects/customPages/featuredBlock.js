export default {
  title: 'Bloc pour Coup de Coeur',
  name: 'featuredBlock',
  type: 'object',
  fields: [
    {
      name: 'featuredTitle',
      type: 'string',
      title: 'Titre de section',
      description: 'Structure: TITRE [icone coup de coeur]',
    },
    { name: 'featuredContent', type: 'text', title: 'Contenu de section' },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier l'encart Coup de Coeur`,
      };
    },
  },
};
