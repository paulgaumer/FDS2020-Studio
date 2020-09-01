export default {
  name: 'event',
  title: 'Evenement',
  type: 'document',
  initialValue: {
    bookingRequired: false,
    bookingRecommanded: false,
    featured: false,
    education: false,
    audience: {
      _type: 'reference',
      _ref: '8bcec1d3-d8af-47b0-85d5-cfd08bcb8e6b',
    },
    startDate: {
      _type: 'richDate',
      local: '2020-10-02T10:00:00.000Z',
      offset: -120,
      timezone: 'Europe/Paris',
      utc: '2020-10-02T08:00:00.000Z',
    },
    endDate: {
      _type: 'richDate',
      local: '2020-10-12T10:00:00.000Z',
      offset: -120,
      timezone: 'Europe/Paris',
      utc: '2020-10-12T08:00:00.000Z',
    },
  },
  fieldsets: [
    { name: 'featuredField', title: 'Labels' },
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
    {
      name: 'villageField',
      title: 'Village des Sciences',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'village',
      title: 'Choisir le village partenaire',
      type: 'reference',
      to: {
        type: 'village',
      },
      fieldset: 'villageField',
    },
    // {
    //   name: 'village',
    //   title: 'Label Village des Sciences',
    //   type: 'boolean',
    //   fieldset: 'featuredField',
    // },
    {
      name: 'featured',
      title: 'Label Coup de Coeur',
      type: 'boolean',
      fieldset: 'featuredField',
    },
    {
      name: 'education',
      title: 'Label Scolaire',
      type: 'boolean',
      fieldset: 'featuredField',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      name: 'map',
      title: 'Adresse',
      type: 'addressGps',
    },
    // DATE & HOURS FIELD
    {
      name: 'startDate',
      title: 'Début',
      type: 'richDate',
      options: {
        timeStep: 30,
      },
      fieldset: 'dateHoursField',
    },
    {
      name: 'endDate',
      title: 'Fin',
      type: 'richDate',
      options: {
        timeStep: 30,
      },
      fieldset: 'dateHoursField',
    },
    // BOOKING FIELD
    {
      name: 'bookingRequired',
      title: 'Réservation Obligatoire',
      type: 'boolean',
      fieldset: 'bookingField',
    },
    {
      name: 'bookingRecommanded',
      title: 'Réservation Conseillée',
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
    // PUBLIC
    {
      name: 'audience',
      title: 'Public',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'audience',
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    // IMAGE
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
