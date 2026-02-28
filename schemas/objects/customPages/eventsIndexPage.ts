import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour page Liste d'Evénements",
  name: "eventsIndexPageBlock",
  type: "object",
  fields: [
    defineField({ name: "topTitle", title: "Titre de haut de page", type: "string" }),
    defineField({
      name: "partnersTitle",
      title: "Titre Section Partenaires",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Liste des Evénements`,
      };
    },
  },
});