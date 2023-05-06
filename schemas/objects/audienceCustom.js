export default {
  title: 'Choisir le public',
  name: 'audienceCustom',
  type: 'object',
  options: {
    columns: 2,
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      title: 'De',
      name: 'from',
      type: 'number',
    },
    {
      title: 'A',
      name: 'to',
      type: 'number',
    },
  ],
};
