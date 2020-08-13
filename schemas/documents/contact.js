export default {
  name: 'contactDepartment',
  title: 'Contact Départemental',
  type: 'document',
  fields: [
    {
      name: 'department',
      title: 'Département',
      type: 'reference',
      to: {
        type: 'department',
      },
    },
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'department.name',
      media: 'logo',
    },
  },
};
