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
            apiId: '35b9d539-983d-41f5-8f55-0bfe5da3e7d2',
            buildHookId: '5f51eb52def3a25e059e2645',
            name: 'staging-fds-pdl2020',
          },
        ],
      },
    },
  ],
};
