import { defineField, defineType } from "sanity";

export default defineType({
  title: "Question de rédaction",
  name: "inputTypeQuestion",
  type: "object",
  fields: [
    defineField({
      name: "questionType",
      type: "string",
      initialValue: "inputType",
      hidden: true,
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description (optionnel)",
      type: "blockContent",
    }),
    defineField({
      name: "picture",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "mainImage",
        },
      ],
    }),
    defineField({
      name: "answer",
      title: "Réponse",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "answerDetails",
      title: "Réponse détaillée (optionnel)",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.title,
      };
    },
  },
});
