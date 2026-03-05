import { defineField, defineType } from "sanity";

export default defineType({
  name: "ambassador",
  title: "Ambassadeur",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required().error("Obligatoire"),
    }),
    defineField({
      name: "testimony",
      title: "Témoignage",
      validation: (Rule) => Rule.required().error("Obligatoire"),
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "video",
      title: "Video",
      description: "Youtube url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).custom((url) =>
          typeof url === "string" && url.includes("youtube")
            ? true
            : "Le format n'est pas valide. Est-ce une url youtube?",
        ),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
