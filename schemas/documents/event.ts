import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Evenement",
  type: "document",
  initialValue: {
    bookingRequired: false,
    bookingRecommanded: false,
    featured: false,
    education: false,
    eventCanceled: false,
  },
  fieldsets: [
    { name: "featuredField", title: "Labels" },
    { name: "informationsContact", title: "Renseignements" },
    {
      name: "bookingField",
      title: "Réservation",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "villageField",
      title: "Village des Sciences",
      options: { collapsible: true, collapsed: false },
    },
    { name: "publicField", title: "Public", options: { collapsed: false } },
    { name: "imageField", title: "Image d'illustration" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "village",
      title: "Choisir les villages partenaires",
      type: "array",
      of: [{ type: "reference", to: { type: "village" } }],
      fieldset: "villageField",
    }),
    defineField({
      name: "featured",
      title: "Label Coup de Coeur",
      type: "boolean",
      fieldset: "featuredField",
    }),
    defineField({
      name: "education",
      title: "Label Scolaire",
      type: "boolean",
      fieldset: "featuredField",
    }),
    defineField({
      name: "eventCanceled",
      title: "Label Annulé",
      type: "boolean",
      fieldset: "featuredField",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "projectOwners",
      title: "Porteurs de projet",
      type: "array",
      of: [{ type: "reference", to: { type: "projectOwner" } }],
      validation: (Rule) =>
        Rule.required().min(1).error("Doit contenir au moins un choix"),
    }),
    defineField({
      name: "department",
      title: "Département",
      type: "reference",
      to: { type: "department" },
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "string",
      hidden: ({ document }) =>
        Array.isArray(document?.village) && document.village.length > 0,
    }),
    defineField({
      name: "timeSlots",
      title: "Dates et Horaires",
      description:
        "Si l'événement est rattaché à un village, les dates et horaires seront automatiquement récupérés. Mais il est possible de les remplacer par des horaires remplis ici.",
      type: "array",
      of: [{ type: "timeSlot" }],
    }),
    defineField({
      name: "timeSlotsPhoneContact",
      title: "Contact pour les dates et horaires",
      type: "string",
    }),
    defineField({
      name: "informationEmail",
      title: "Email renseignements",
      type: "string",
      fieldset: "informationsContact",
    }),
    defineField({
      name: "informationPhone",
      title: "Téléphone renseignements",
      type: "string",
      fieldset: "informationsContact",
    }),
    defineField({
      name: "bookingRequired",
      title: "Réservation Obligatoire",
      type: "boolean",
      fieldset: "bookingField",
    }),
    defineField({
      name: "bookingRecommanded",
      title: "Réservation Conseillée",
      type: "boolean",
      fieldset: "bookingField",
    }),
    defineField({
      name: "bookingEmail",
      title: "Email",
      type: "string",
      fieldset: "bookingField",
    }),
    defineField({
      name: "bookingPhone",
      title: "Téléphone",
      type: "string",
      fieldset: "bookingField",
    }),
    defineField({
      name: "bookingWebsite",
      title: "Site Web",
      type: "url",
      fieldset: "bookingField",
    }),
    defineField({
      name: "theme",
      title: "Thème",
      type: "array",
      of: [{ type: "reference", to: { type: "theme" } }],
      validation: (Rule) =>
        Rule.required()
          .unique()
          .min(1)
          .error("Doit contenir au moins un choix"),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "array",
      of: [{ type: "reference", to: { type: "format" } }],
      validation: (Rule) =>
        Rule.required()
          .unique()
          .min(1)
          .error("Doit contenir au moins un choix"),
    }),
    defineField({
      name: "audience",
      title: "Classes d'âge",
      type: "array",
      of: [{ type: "reference", to: { type: "audience" } }],
      fieldset: "publicField",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const custom = context.document?.audienceCustom as
            | { from?: unknown }
            | undefined;
          return custom?.from === undefined && field === undefined
            ? `Un type de public ou une tranche d'age personnalisée doit être indiqué`
            : true;
        }),
      hidden: ({ document }) => !document?.education,
    }),
    defineField({
      name: "audienceCustom",
      title: "Tranche d'age personnalisée (optionnel)",
      type: "audienceCustom",
      fieldset: "publicField",
      hidden: ({ document }) => !!document?.education,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fieldset: "imageField",
      options: { hotspot: true },
    }),
    defineField({
      name: "eventImageCredits",
      title: "Crédits",
      description: "(optionnel - texte, url...)",
      type: "string",
      fieldset: "imageField",
    }),
  ],
  preview: {
    select: {
      title: "title",
      department: "department.name",
      image: "image",
      scolaire: "education",
    },
    prepare(selection) {
      const { title, department, scolaire, image } = selection;
      return {
        title,
        subtitle: `${department}${scolaire ? " - Scolaire" : ""}`,
        media: image,
      };
    },
  },
});
