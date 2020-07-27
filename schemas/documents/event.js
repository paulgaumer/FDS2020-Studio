export default {
  name: 'event',
  title: 'Evenement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'projectOwners',
      title: 'Porteurs de projet',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'projectOwner',
          },
        },
      ],
    },
    {
      name: 'department',
      title: 'Département',
      type: 'reference',
      to: {
        type: 'department',
      },
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Date de début',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'Date de fin',
      type: 'datetime',
    },
    {
      name: 'booking',
      title: 'Réservation Obligatoire',
      type: 'boolean',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'theme',
          },
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'format',
      title: 'Format',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'format',
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
  ],
};
