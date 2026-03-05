import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour page Scolaires",
  name: "scolairesPageBlock",
  type: "object",
  fields: [
    defineField({
      name: "topTitle",
      title: "Titre de haut de page",
      type: "string",
    }),
    defineField({
      name: "partnersTitle",
      title: "Titre Section Partenaires",
      type: "string",
    }),
    defineField({
      name: "logosList",
      title: "Logos Partenaires Scolaires",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "logo" },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Scolaires`,
      };
    },
  },
});
