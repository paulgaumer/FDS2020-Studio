import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectOwner",
  title: "Porteur de projet",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "website",
      title: "Site internet",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Page Facebook",
      type: "string",
    }),
  ],
});
