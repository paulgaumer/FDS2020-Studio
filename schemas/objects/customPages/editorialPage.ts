import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  title: "Bloc pour page Editorial",
  name: "editorialPageBlock",
  type: "object",
  fieldsets: [
    { name: "topSection", title: "Haut de page" },
    { name: "partnersSection", title: "Partenaires" },
    { name: "contactSection", title: "Contact" },
    { name: "previousEditionsSection", title: "Editions" },
  ],
  fields: [
    // Top Section
    defineField({
      name: "topTitle",
      title: "Titre",
      type: "string",
      fieldset: "topSection",
    }),
    defineField({
      name: "topContent",
      title: "Contenu",
      type: "blockContent",
      fieldset: "topSection",
    }),
    // Previous Editions Section
    defineField({
      name: "previousEditionsTitle",
      title: "Titre de Section",
      type: "string",
      fieldset: "previousEditionsSection",
    }),
    defineField({
      name: "previousEditions",
      title: "Photos des Editions Précédentes",
      type: "array",
      of: [defineArrayMember({ type: "mainImage" })],
      fieldset: "previousEditionsSection",
    }),
    // Partners Section
    defineField({
      name: "partnersTitle",
      title: "Titre de Section",
      type: "string",
      fieldset: "partnersSection",
    }),
    defineField({
      name: "partnersContent",
      title: "Contenu",
      type: "blockContent",
      fieldset: "partnersSection",
    }),
    defineField({
      name: "organizersTitle",
      title: "Titre Logos Organisateurs",
      type: "string",
      fieldset: "partnersSection",
    }),
    defineField({
      name: "organizers",
      title: "Logos Organisateurs",
      type: "array",
      of: [defineArrayMember({ type: "mainImage" })],
      fieldset: "partnersSection",
    }),
    defineField({
      name: "partners",
      title: "Logos Partenaires",
      type: "array",
      of: [defineArrayMember({ type: "mainImage" })],
      fieldset: "partnersSection",
    }),
    // Contact Section
    defineField({
      name: "contactTitle",
      title: "Titre",
      type: "string",
      fieldset: "contactSection",
    }),
    defineField({
      name: "contactContent",
      title: "Contenu",
      type: "blockContent",
      fieldset: "contactSection",
    }),
    defineField({
      name: "contactPressTitle",
      title: "Titre Contact Presse",
      type: "string",
      fieldset: "contactSection",
    }),
    defineField({
      name: "pressContact",
      title: "Contact Presse",
      type: "pressContact",
      fieldset: "contactSection",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `Modifier la page Editorial`,
      };
    },
  },
});