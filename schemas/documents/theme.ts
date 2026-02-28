import { defineType, defineField } from "sanity";

export default defineType({
  name: "theme",
  title: "Thème",
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
