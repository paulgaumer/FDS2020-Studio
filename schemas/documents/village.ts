import { defineField, defineType } from "sanity";

export default defineType({
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
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
    }),
    defineField({
      name: 'scolaire',
      title: 'Accueille le public scolaire ?',
      type: 'boolean',
    }),
    defineField({
      name: 'grandPublic',
      title: 'Accueille le grand public ?',
      type: 'boolean',
    }),
    defineField({
      name: 'eventCanceled',
      title: 'Label Annulé',
      type: 'boolean',
      fieldset: 'featuredField',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    }),
    defineField({
      name: 'department',
      title: 'Département',
      type: 'reference',
      to: {
        type: 'department',
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
    }),
    // DATE & HOURS FIELD
    defineField({
      name: 'timeSlots',
      title: 'Dates et Horaires',
      type: 'array',
      of: [{ type: 'timeSlot' }],
      validation: (Rule) =>
        Rule.required().min(1).error('Doit contenir au moins un choix'),
    }),
    // IMAGE
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Obligatoire'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'department.name',
      media: 'image',
    },
  },
});