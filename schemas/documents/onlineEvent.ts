import { defineField, defineType } from "sanity";

export default defineType({
  name: "onlineEvent",
  title: "Evenement en ligne",
  type: "document",
  initialValue: {
    bookingRequired: false,
    bookingRecommanded: false,
  },
  fieldsets: [
    {
      name: "bookingField",
      title: "Réservation",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "summary",
      title: "Résumé",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "mediaUrl",
      title: "Lien externe vers le Media",
      type: "url",
    }),
    defineField({
      name: "bookingRequired",
      title: "Réservation Obligatoire",
      type: "boolean",
      fieldset: "bookingField",
    }),
    defineField({
      name: "bookingRecommanded",
      title: "Réservation Recommandée",
      type: "boolean",
      fieldset: "bookingField",
    }),
  ],
});
