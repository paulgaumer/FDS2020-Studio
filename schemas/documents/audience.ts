import { defineField, defineType } from "sanity";

export default defineType({
  name: "audience",
  title: "Public",
  type: "document",
  initialValue: { audienceEducation: false },
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "audienceEducation",
      title: "Cible Scolaire",
      description: "",
      type: "boolean",
    }),
    defineField({
      name: "age",
      title: "Age",
      description: "Age indicatif, pour pouvoir trier ensuite sur le site",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Âge décroissant",
      name: "ageDesc",
      by: [{ field: "age", direction: "desc" }],
    },
  ],
});

