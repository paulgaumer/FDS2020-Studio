import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour Villages des Sciences",
  name: "villageBlock",
  type: "object",
  fields: [
    defineField({ name: "villageTitle", type: "string", title: "Titre de section" }),
    defineField({ name: "villageContent", type: "text", title: "Contenu de section" }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier l'encart Village des Sciences`,
      };
    },
  },
});
