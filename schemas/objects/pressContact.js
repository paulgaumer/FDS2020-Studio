export default {
  name: 'pressContact',
  title: 'Bloc Contact Press',
  type: 'object',
  fields: [
    { name: 'name', title: 'Nom', type: 'string' },
    { name: 'phone', title: 'Téléphone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
  ],

  preview: {
    prepare() {
      return {
        title: `Description`,
      };
    },
  },
};
