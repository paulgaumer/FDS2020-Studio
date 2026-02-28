import {  defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Témoignages",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Texte",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
  ],
});