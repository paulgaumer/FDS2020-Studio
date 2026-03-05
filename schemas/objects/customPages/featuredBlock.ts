import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour Coup de Coeur",
  name: "featuredBlock",
  type: "object",
  fields: [
    defineField({
      name: "featuredTitle",
      type: "string",
      title: "Titre de section",
      description: "Structure: TITRE [icone coup de coeur]",
    }),
    defineField({
      name: "featuredContent",
      type: "text",
      title: "Contenu de section",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier l'encart Coup de Coeur`,
      };
    },
  },
});
