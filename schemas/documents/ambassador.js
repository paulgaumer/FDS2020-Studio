export default {
  name: 'ambassador',
  title: 'Ambassadeur',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testimony',
      title: 'Témoignage',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          // For titles (h1, h2..)
          styles: [{ title: 'Normal', value: 'normal' }],
          // For ol or ul lists
          lists: [],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
