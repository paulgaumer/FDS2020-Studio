export default {
  name: 'event',
  title: 'Evenement',
  type: 'document',
  initialValue: {
    bookingRequired: false,
    featured: false,
    village: false,
    education: false,
    audience: {
      _type: 'reference',
      _ref: '8bcec1d3-d8af-47b0-85d5-cfd08bcb8e6b',
    },
    startDate: '2020-10-02T13:00:00.000Z',
    endDate: '2020-10-02T14:00:00.000Z',
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
      name: 'village',
      title: 'Label Village des Sciences',
      type: 'boolean',
      fieldset: 'featuredField',
    },
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
      name: 'map',
      title: 'Adresse',
      type: 'addressGps',
    },
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
      name: 'bookingRequired',
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
    // PUBLIC
    {
      name: 'audience',
      title: 'Public',
      type: 'reference',
      to: {
        type: 'audience',
      },
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
