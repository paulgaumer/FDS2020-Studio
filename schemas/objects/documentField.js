export default {
  title: 'Bloc document',
  name: 'documentField', // document is a protected keyword
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'file',
      title: 'Document',
      type: 'file',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
