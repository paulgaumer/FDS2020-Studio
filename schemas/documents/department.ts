import { defineField, defineType } from "sanity";

export default defineType({
  name: "department",
  title: "Département",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
  ],
});
