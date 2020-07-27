export default {
  name: 'event',
  title: 'Evenement',
  type: 'document',
  initialValue: {
    bookingToggle: false,
    featured: false,
  },
  fieldsets: [
    { name: 'featuredField', title: '' },
    {
      name: 'dateHoursField',
      title: 'Dates & Horaires',
      options: {
        columns: 2,
      },
    },
    {
      name: 'bookingField',
      title: 'Réservation',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
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
      name: 'featured',
      title: 'Label Coup de Coeur',
      type: 'boolean',
      fieldset: 'featuredField',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
    },
    // {
    //   name: 'map',
    //   title: 'map',
    //   type: 'geopoint',
    // },
    // DATE & HOURS FIELD
    {
      name: 'startDate',
      title: 'Début',
      type: 'datetime',
      fieldset: 'dateHoursField',
    },
    {
      name: 'endDate',
      title: 'Fin',
      type: 'datetime',
      fieldset: 'dateHoursField',
    },
    // BOOKING FIELD
    {
      name: 'bookingToggle',
      title: 'Réservation Obligatoire',
      type: 'boolean',
      fieldset: 'bookingField',
    },
    {
      name: 'bookingEmail',
      title: 'Email',
      type: 'string',
      fieldset: 'bookingField',
    },
    {
      name: 'bookingPhone',
      title: 'Téléphone',
      type: 'string',
      fieldset: 'bookingField',
    },
    // THEME
    {
      name: 'theme',
      title: 'Thème',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'theme',
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    // FORMAT
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
      validation: (Rule) => Rule.required(),
    },
    // IMAGE
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department.name',
      media: 'image',
    },
  },
};
