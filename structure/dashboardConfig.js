export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Publier les modifications',
        description:
          'NOTE: Il est nécessaire de publier toutes les modifications afin de les voir apparaitre sur le site',
        sites: [
          {
            title: 'Fête de la Science, Pays de la Loire',
            apiId: '699d31df-6378-4d92-bc43-a0b61ea0aa4e',
            buildHookId: '5faad0490bd16c0ed63362b2',
            name: 'Sanity Hook',
          },
        ],
      },
    },
  ],
};
