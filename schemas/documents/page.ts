import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [{ name: "admin", title: "⚠ ADMIN (Ne pas modifier) ⚠" }],
  fields: [
    defineField({
      name: "pageContent",
      title: "CONTENU DE PAGE",
      type: "array",
      of: [
        defineArrayMember({ type: "editorialPageBlock" }),
        defineArrayMember({ type: "contactPageBlock" }),
        defineArrayMember({ type: "covidPageBlock" }),
        defineArrayMember({ type: "scolairesPageBlock" }),
        defineArrayMember({ type: "multimediaPageBlock" }),
        defineArrayMember({ type: "eventsIndexPageBlock" }),
        defineArrayMember({ type: "mentionsLegalesPageBlock" }),
        defineArrayMember({ type: "homePageBlock" }),
        defineArrayMember({ type: "featuredBlock" }),
        defineArrayMember({ type: "villageBlock" }),
        defineArrayMember({ type: "footerBlock" }),
        defineArrayMember({ type: "quiz21ConditionsPageBlock" }),
        defineArrayMember({ type: "questionnairePageBlock" }),
      ],
      options: { modal: { type: 'dialog' } },
      validation: (Rule) => Rule.required().min(1).max(1),
    }),
    defineField({
      name: "pageName",
      title: "Nom de la page",
      type: "string",
      fieldset: "admin",
    }),
  ],
});
