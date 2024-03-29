export default {
  title: 'Bloc pour la Homepage',
  name: 'homePageBlock',
  type: 'object',
  fieldsets: [
    { name: 'heroFieldSet', title: 'Haut de Page' },
    { name: 'news', title: 'Actualités' },
    { name: 'featuresFieldSet', title: 'A propos de la Fête de la Science' },
    { name: 'instagramFieldSet', title: "A propos d'Instagram" },
  ],
  fields: [
    {
      name: 'heroButton',
      title: 'Texte du bouton',
      description: 'Laisser vide pour ne pas afficher de bouton',
      type: 'string',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'showProgrammeButtons',
      title: 'Afficher les boutons du programme. Si activé en même temps que le bouton ci-dessus, cela le remplace.',
      type: 'boolean',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'heroUrl',
      title: 'Url du bouton',
      type: 'string',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'leftLogo',
      title: 'Logo de gauche',
      type: 'image',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'leftLogoWidth',
      title: 'Largeur du logo de gauche',
      type: 'number',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'showRedCircle',
      title: 'Afficher un cercle rouge sur le logo de gauche',
      type: 'boolean',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'rightLogo',
      title: 'Logo de droite',
      type: 'image',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'rightLogoWidth',
      title: 'Largeur du logo de droite',
      type: 'number',
      fieldset: 'heroFieldSet',
    },
    {
      name: 'hideNews',
      title: 'Masquer les actualités',
      type: 'boolean',
      fieldset: 'news',
    },
    {
      name: 'showFavorites',
      title: 'Afficher des coups de coeur en actualités',
      type: 'boolean',
      fieldset: 'news',
    },
    {
      name: 'featuresTitle',
      title: 'Titre de section',
      type: 'string',
      fieldset: 'featuresFieldSet',
    },
    {
      name: 'features',
      title: 'Points de description',
      fieldset: 'featuresFieldSet',
      type: 'array',
      of: [
        {
          type: 'featureDesc',
        },
      ],
    },
    {
      name: 'featuresButton',
      title: 'Texte du bouton',
      type: 'string',
      fieldset: 'featuresFieldSet',
    },
    {
      name: 'keyFigures',
      title: 'Chiffres clés',
      fieldset: 'featuresFieldSet',
      type: 'array',
      of: [
        {
          type: 'keyFigure',
        },
      ],
    },
    {
      name: 'instagramTitle',
      title: 'Titre Instagram',
      type: 'string',
      fieldset: 'instagramFieldSet',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la Homepage`,
      };
    },
  },
};
