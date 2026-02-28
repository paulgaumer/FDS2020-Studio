import { defineType, defineField } from "sanity";

export default defineType({
  title: "Open Graph",
  name: "openGraph",
  type: "object",
  fields: [
    defineField({
      title: "Titre",
      name: "title",
      type: "string",
      description: "Moins de 60 caractères",
      validation: (Rule) =>
        Rule.max(60).warning("Moins de 60 caractères"),
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      description: "Moins de 155 caractères",
      validation: (Rule) =>
        Rule.max(155).warning("Moins de 155 caractères"),
    }),
    defineField({
      title: "Mots-clés",
      name: "keywords",
      type: "string",
      description: "Liste de mots-clés séparés par une virgule",
    }),
    defineField({
      title: "Image",
      description:
        "Facebook recommande une taille de 2400x1260 ou au minimum 1200x630",
      name: "image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      route: "route.slug.current",
      link: "link",
    },
    prepare({ title, route, link }) {
      let subtitle;
      if (route) {
        subtitle = `Route: /${route}/`;
      } else if (link) {
        subtitle = `External link: ${link}`;
      } else {
        subtitle = "Not set";
      }
      return {
        title,
        subtitle,
      };
    },
  },
});