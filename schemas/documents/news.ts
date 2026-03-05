import { defineType, defineField } from "sanity";

export default defineType({
  name: "news",
  title: "Actualités",
  type: "document",
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
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "date",
      title: "Date de publication",
      type: "date",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "showOnHomepage",
      title: "Afficher sur la page d'accueil",
      type: "boolean",
    }),
    defineField({
      name: "summary",
      title: "Résumé sur la page d'accueil",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Contenu complet",
      type: "blockContent",
    }),
  ],
});
