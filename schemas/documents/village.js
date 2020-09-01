export default {
  name: 'village',
  title: 'Village des Sciences',
  type: 'document',
  initialValue: {
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
