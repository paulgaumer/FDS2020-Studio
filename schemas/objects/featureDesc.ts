import { defineType, defineField } from "sanity";

export default defineType({
  title: "Bloc texte & image",
  name: "featureDesc",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "feature",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Description`,
      };
    },
  },
});
