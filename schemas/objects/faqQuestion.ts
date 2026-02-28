import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc question FAQ",
  name: "faqQuestion",
  type: "object",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});