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
            apiId: '03be9752-67d3-42d6-a8d9-61b8a1ee2fc8',
            buildHookId: '5f4bb4a486e53702bcedb62a',
            name: 'staging-fds-pdl2020',
          },
        ],
      },
    },
  ],
};
