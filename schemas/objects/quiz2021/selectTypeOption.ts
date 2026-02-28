import { defineField, defineType } from "sanity";


export default defineType({
  title: "Option",
  name: "selectTypeOption",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "answer",
      title: "Bonne réponse",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description (optionnel)",
      type: "text",
    }),
    defineField({
      name: "picture",
      title: "Photo",
      type: "mainImage",
    }),
  ],
  preview: {
    select: {
      title: "title",
      answer: "answer",
    },
    prepare(selection: Record<string, any>) {
      return {
        title: `${selection.title} ${selection.answer ? "  ✅" : ""}`,
      };
    },
  },
});