import { defineField, defineType } from "sanity";

export default defineType({
  title: "Option",
  name: "associationTypeOption",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "picture",
      title: "Photo",
      type: "mainImage",
    }),
    defineField({
      name: "answer",
      title: "Bonne réponse",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "picture",
    },
    prepare(selection: Record<string, any>) {
      return {
        title: selection.title,
        media: selection.image,
      };
    },
  },
});
