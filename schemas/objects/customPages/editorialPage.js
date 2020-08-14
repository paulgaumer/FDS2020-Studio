export default {
  title: 'Bloc pour page Editorial',
  name: 'editorialPageBlock',
  type: 'object',
  fieldsets: [
    { name: 'topSection', title: 'Haut de page' },
    { name: 'partnersSection', title: 'Partenaires' },
    { name: 'contactSection', title: 'Contact' },
  ],
  fields: [
    // Top Section
    {
      name: 'topTitle',
      title: 'Titre',
      type: 'string',
      fieldset: 'topSection',
    },
    {
      name: 'topContent',
      title: 'Contenu',
      fieldset: 'topSection',
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
    // Partners Section
    {
      name: 'partnersTitle',
      title: 'Titre',
      type: 'string',
      fieldset: 'partnersSection',
    },
    // Contact Section
    {
      name: 'contactContent',
      title: 'Contenu',
      type: 'text',
      fieldset: 'contactSection',
    },
  ],
};
