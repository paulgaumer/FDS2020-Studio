import { defineField, defineType } from "sanity";


export default defineType({
  title: "Question de sélection",
  name: "selectTypeQuestion",
  type: "object",
  fields: [
    defineField({
      name: "questionType",
      type: "string",
      initialValue: "selectType",
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
      name: "options",
      title: "Choix de réponse",
      type: "array",
      of: [
        {
          type: "selectTypeOption",
        },
      ],
      validation: (Rule) => Rule.required().error("Obligatoire").min(1),
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