import { defineField, defineType } from "sanity";

export default defineType({
  title: "Département",
  name: "departmentMapping",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Libellé exact dans le questionnaire",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "destination",
      type: "reference",
      to: { type: "department" },
      title: "Equivalent dans le back-office",
      validation: (Rule) => Rule.required(),
    }),
  ],
});