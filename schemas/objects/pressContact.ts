import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressContact",
  title: "Bloc Contact Press",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "phone", title: "Téléphone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
  ],
  preview: {
    prepare() {
      return {
        title: `Description`,
      };
    },
  },
});
