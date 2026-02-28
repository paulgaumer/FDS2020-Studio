import { defineType, defineField } from "sanity";

export default defineType({
  name: "format",
  title: "Format",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "formatIcon",
      title: "Icone",
      type: "image",
      description: "L'image doit être au format SVG, de couleur blanche",
    }),
  ],
});

