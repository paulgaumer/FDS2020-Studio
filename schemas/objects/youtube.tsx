import { defineField, defineType } from "sanity";

import YoutubePreview from "../../components/YoutubePreview";

export default defineType({
  name: "youtube",
  type: "object",
  title: "Youtube",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "URL",
    }),
  ],
  components: {
    preview: YoutubePreview,
  },
  preview: {
    select: {
      url: "url",
    },
    prepare(value: { url: string | undefined }): Record<string, string> {
      return {
        url: value.url || "Aucune URL",
      };
    },
  },
});