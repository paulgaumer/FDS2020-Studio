import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc document",
  name: "documentField",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "file",
      title: "Document",
      type: "file",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});