import { defineField, defineType } from "sanity";


export default defineType({
  title: "Créneau Horaire",
  name: "timeSlot",
  type: "object",
  fieldsets: [
    {
      name: "startField",
      options: { columns: 2 },
    },
    {
      name: "endField",
      options: { columns: 2 },
    },
  ],
  fields: [
    defineField({
      name: "startDate",
      type: "date",
      title: "Date de début",
      description: "Choisir une date",
      fieldset: "startField",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startTime",
      type: "string",
      title: "Heure de début",
      description: 'Respecter le format: "00:00"',
      fieldset: "startField",
      validation: (Rule) =>
        Rule.required().regex(/^(0\d|1\d|2[0-3]):[0-5]\d$/, { name: "00:00" }),
    }),
    defineField({
      name: "endDate",
      type: "date",
      title: "Date de fin",
      description: "Choisir une date",
      fieldset: "endField",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endTime",
      type: "string",
      title: "Heure de fin",
      description: 'Respecter le format: "00:00"',
      fieldset: "endField",
      validation: (Rule) =>
        Rule.required().regex(/^(0\d|1\d|2[0-3]):[0-5]\d$/, { name: "00:00" }),
    }),
  ],
});