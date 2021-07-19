export default {
  name: 'event',
  title: 'Evenement',
  type: 'document',
  initialValue: {
    bookingRequired: false,
    bookingRecommanded: false,
    featured: false,
    education: false,
    eventCanceled: false,
  },
  fieldsets: [
    { name: 'featuredField', title: 'Labels' },
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
    { name: 'publicField', title: 'Public' },
    { name: 'imageField', title: "Image d'illustration" },
  ],
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
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
      name: 'eventCanceled',
      title: 'Label Annulé',
      type: 'boolean',
      fieldset: 'featuredField',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Obligatoire'),
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
      validation: (Rule) =>
        Rule.required().min(1).error('Doit contenir au moins un choix'),
    },
    {
      name: 'department',
      title: 'Département',
      type: 'reference',
      to: {
        type: 'department',
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'map',
      title: 'Adresse',
      type: 'addressGps',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    // DATE & HOURS FIELD
    {
      name: 'timeSlots',
      title: 'Dates et Horaires',
      type: 'array',
      of: [{ type: 'timeSlot' }],
      validation: (Rule) =>
        Rule.required().min(1).error('Doit contenir au moins un choix'),
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
    {
      name: 'bookingWebsite',
      title: 'Site Web',
      type: 'url',
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
      validation: (Rule) =>
        Rule.required()
          .unique()
          .min(1)
          .error('Doit contenir au moins un choix'),
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
      validation: (Rule) =>
        Rule.required()
          .unique()
          .min(1)
          .error('Doit contenir au moins un choix'),
    },
    // PUBLIC
    {
      name: 'audience',
      title: 'A partir de',
      type: 'reference',
      to: {
        type: 'audience',
      },
      fieldset: 'publicField',
    },
    {
      name: 'audienceCustom',
      title: 'Tranche personnalisée',
      description: 'optionnel',
      type: 'string',
      fieldset: 'publicField',
    },
    // IMAGE
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fieldset: 'imageField',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'eventImageCredits',
      title: 'Crédits',
      description: '(optionnel - texte, url...)',
      type: 'string',
      fieldset: 'imageField',
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
