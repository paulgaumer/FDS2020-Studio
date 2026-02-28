import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour page Quiz 2021 Conditions",
  name: "quiz21ConditionsPageBlock",
  type: "object",
  fields: [
    defineField({ name: "topTitle", title: "Titre de haut de page", type: "string" }),
    defineField({ name: "contentBlock", title: "Contenu Texte", type: "blockContent" }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Quiz 21 Conditions`,
      };
    },
  },
});