import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressKit",
  title: "Press Kit",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "file",
      title: "Document",
      type: "file",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
})
