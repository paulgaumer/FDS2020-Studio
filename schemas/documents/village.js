export default {
  name: 'village',
  title: 'Village des Sciences',
  type: 'document',
  initialValue: {
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
      name: 'eventCanceled',
      title: 'Label Annulé',
      type: 'boolean',
      fieldset: 'featuredField',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },

    // {
    //   name: 'projectOwners',
    //   title: 'Porteurs de projet',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {
    //         type: 'projectOwner',
    //       },
    //     },
    //   ],
    //   validation: (Rule) => Rule.required(),
    // },
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
      name: 'timeSlots',
      title: 'Dates et Horaires',
      type: 'array',
      of: [{ type: 'timeSlot' }],
      validation: (Rule) => Rule.required().min(1),
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
