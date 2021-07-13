export default {
  name: 'onlineEvent',
  title: 'Evenement en ligne',
  type: 'document',
  initialValue: {
    bookingRequired: false,
    bookingRecommanded: false,
  },
  fieldsets: [
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
      name: 'summary',
      title: 'Résumé',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaUrl',
      title: 'Lien externe vers le Media',
      type: 'url',
    },
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
    // DATE & HOURS FIELD
    {
      name: 'timeSlots',
      title: 'Dates et Horaires',
      type: 'array',
      of: [{ type: 'timeSlot' }],
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
      validation: (Rule) => Rule.required().unique(),
    },
    // PUBLIC
    {
      name: 'audience',
      title: 'A partir de',
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
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'projectOwners',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle[0].name,
        media,
      };
    },
  },
};
