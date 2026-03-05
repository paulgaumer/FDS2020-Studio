import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour page Covid19",
  name: "covidPageBlock",
  type: "object",
  fields: [
    defineField({
      name: "topTitle",
      title: "Titre de haut de page",
      type: "string",
    }),
    defineField({
      name: "contentBlock",
      title: "Contenu Texte",
      type: "blockContent",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Covid19`,
      };
    },
  },
});
