import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour Footer",
  name: "footerBlock",
  type: "object",
  fields: [
    defineField({
      name: "logosRankTop",
      title: "Logos Rangée du haut",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "logo" },
        }),
      ],
    }),
    defineField({
      name: "logosRankBottom",
      title: "Logos Rangée du bas",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "logo" },
        },
      ],
    }),
    defineField({
      name: "instagramLinkFooter",
      title: "Lien vers Instagram",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier le Footer`,
      };
    },
  },
});
