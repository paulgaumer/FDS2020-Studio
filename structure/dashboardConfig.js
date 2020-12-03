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
            // **** PRODUCTION SITE ****
            // apiId: '699d31df-6378-4d92-bc43-a0b61ea0aa4e',
            // buildHookId: '5faad0490bd16c0ed63362b2',
            // name: 'Sanity Hook',
            // *****************************
            // **** TEMP SITE ****
            apiId: '92497510-40a8-4eea-acf4-a937fa6920a7',
            buildHookId: '5fc8ca7dc5319826ace64f72',
            name: 'fds_temp_build_hook',
            // *****************************
          },
        ],
      },
    },
  ],
};
