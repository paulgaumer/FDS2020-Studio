import { defineField, defineType } from "sanity";

export default defineType({
  title: "Choisir le public",
  name: "audienceCustom",
  type: "object",
  options: {
    columns: 2,
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      title: "De",
      name: "from",
      type: "number",
    }),
    defineField({
      title: "A",
      name: "to",
      type: "number",
    }),
  ],
});
