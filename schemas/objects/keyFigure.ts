import { defineField, defineType } from "sanity";

export default defineType({
  title: "Chiffre clé",
  name: "keyFigure",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "number",
      title: "Chiffre",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
  ],
  preview: {
    select: {
      title: "description",
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
});