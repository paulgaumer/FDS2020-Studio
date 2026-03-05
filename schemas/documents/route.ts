import { defineField, defineType } from "sanity";

export default defineType({
  name: "route",
  title: "Liens menu",
  type: "document",
  orderings: [
    {
      title: "Par ordre",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "label",
      title: "Libellé",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "hide",
      title: "Masquer dans le menu",
      type: "boolean",
    }),
    defineField({
      name: "link",
      title: "Lien",
      type: "string",
      description: "ATTENTION - Ne pas modifier",
    }),
    defineField({
      name: "order",
      title: "Ordre",
      type: "number",
      description: "Ordre d'affichage dans le menu",
    }),
  ],
});
