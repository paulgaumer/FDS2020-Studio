import { defineField, defineType } from "sanity";

export default defineType({
  name: "mainImage",
  type: "image",
  title: "Image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alt Text",
      description: `Important pour le SEO et l'accessibilité.`,
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Légende (optionnelle)",
    }),
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "alt",
    },
  },
});
