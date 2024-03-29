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
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      },
    },
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
      name: 'scolaire',
      title: 'Accueille le public scolaire ?',
      type: 'boolean',
    },
    {
      name: 'grandPublic',
      title: 'Accueille le grand public ?',
      type: 'boolean',
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
    // IMAGE
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
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
