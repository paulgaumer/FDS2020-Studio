import { defineType, defineField } from "sanity";

export default defineType({
  name: "quizByDepartment",
  title: "Quiz",
  type: "document",
  fields: [
    defineField({
      name: "department",
      title: "Département",
      type: "reference",
      to: { type: "department" },
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answers",
      title: "Réponses",
      type: "array",
      of: [
        {
          name: "answer",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "department.name",
    },
  },
});
