import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactDepartment",
  title: "Contact Départemental",
  type: "document",
  fields: [
    defineField({
      name: "department",
      title: "Département",
      type: "reference",
      to: { type: "department" },
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Lien Url",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "department.name",
      media: "logo",
    },
  },
});
