import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour page Contact",
  name: "contactPageBlock",
  type: "object",
  fieldsets: [{ name: "contactPressField", title: "Bloc Contact Press" }],
  fields: [
    defineField({ name: "topTitle", title: "Titre de haut de page", type: "string" }),
    defineField({ name: "topContent", title: "Contenu", type: "blockContent" }),
    defineField({ name: "pressTitle", title: "Titre de Section Presse", type: "string" }),
    defineField({
      name: "contactTitle",
      title: "Titre de bloc Contact Presse",
      type: "string",
      fieldset: "contactPressField",
    }),
    defineField({
      name: "pressContact",
      type: "pressContact",
      title: "Contact",
      fieldset: "contactPressField",
    }),
    defineField({
      name: "resourceTitle",
      title: "Titre de bloc Ressources",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Contact`,
      };
    },
  },
});