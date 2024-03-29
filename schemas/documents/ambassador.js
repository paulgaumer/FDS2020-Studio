export default {
  name: 'ambassador',
  title: 'Ambassadeur',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'testimony',
      title: 'Témoignage',
      validation: (Rule) => Rule.required().error('Obligatoire'),
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
    {
      name: 'video',
      title: 'Video',
      description: 'Youtube url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'youtube'],
        })
          .regex(/youtube/)
          .error("Le format n'est pas valide. Est-ce une url youtube?"),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
