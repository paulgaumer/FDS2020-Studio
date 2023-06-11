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
    {name: 'featuredField', title: 'Labels'},
    {
      name: 'bookingField',
      title: 'Réservation',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: 'villageField',
      title: 'Village des Sciences',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {name: 'publicField', title: 'Public', options: { collapsed: false }},
    {name: 'imageField', title: "Image d'illustration"},
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
      title: 'Choisir les villages partenaires',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'village',
          },
        },
      ],
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
      name: 'address',
      title: 'Adresse',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          return !context.document?.village?.length &&
            field === undefined
            ? `Obligatoire`
            : true
        }
        ),
      hidden: ({document}) => {
        return document?.village?.length
      }
    },
    // DATE & HOURS FIELD
    {
      name: 'timeSlots',
      title: 'Dates et Horaires',
      type: 'array',
      of: [{type: 'timeSlot'}],
      hidden: ({document}) => {
        return document?.village?.length
      }
    },
    {
      name: 'timeSlotsPhoneContact',
      title: 'Contact pour les dates et horaires',
      type: 'string',
    },
    // BOOKING FIELD
    {
      name: 'bookingRequired',
      title: 'Réservation Obligatoire',
      type: 'boolean',
      fieldset: 'bookingField',
      hidden: ({document}) => {
        return document?.village?.length
      }
    },
    {
      name: 'bookingRecommanded',
      title: 'Réservation Conseillée',
      type: 'boolean',
      fieldset: 'bookingField',
      hidden: ({document}) => {
        return document?.village?.length
      }
    },
    {
      name: 'bookingEmail',
      title: 'Email',
      type: 'string',
      fieldset: 'bookingField',
      hidden: ({document}) => {
        return document?.village?.length
      }
    },
    {
      name: 'bookingPhone',
      title: 'Téléphone',
      type: 'string',
      fieldset: 'bookingField',
      hidden: ({document}) => {
        return document?.village?.length
      }
    },
    {
      name: 'bookingWebsite',
      title: 'Site Web',
      type: 'url',
      fieldset: 'bookingField',
      hidden: ({document}) => {
        return document?.village?.length
      }
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
      title: "Classes d'âge",
      type: 'array',
      of: [
        {
          type: "reference",
          to: {
            type: 'audience',
          }
        },
      ],
      fieldset: 'publicField',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          return context.document?.audienceCustom?.from === undefined &&
            field === undefined
            ? `Un type de public ou une tranche d'age personnalisée doit être indiqué`
            : true
        }
        ),
      hidden: ({document}) => {
          return !document?.education
      }
    },
    {
      name: 'audienceCustom',
      title: "Tranche d'age personnalisée (optionnel)",
      type: 'audienceCustom',
      fieldset: 'publicField',
      hidden: ({document}) => {
        return document?.education
      }
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
      department: 'department.name',
      image: 'image',
      scolaire: 'education',
    },
    prepare(selection) {
      const {title, department, scolaire, image} = selection
      return {
        title,
        subtitle: `${department}${scolaire ? ' - Scolaire': ''}`,
        media: image,
      }
    }
  },
};
