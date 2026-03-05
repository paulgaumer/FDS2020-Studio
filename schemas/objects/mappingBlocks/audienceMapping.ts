import { defineField, defineType } from "sanity";

export default defineType({
  title: "Audience",
  name: "audienceMapping",
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
      to: { type: "audience" },
      title: "Equivalent dans le back-office",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
