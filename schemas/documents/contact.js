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
      validation: (Rule) => Rule.required().error('Obligatoire'),
    },
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Obligatoire'),
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
      name: 'url',
      title: 'Lien Url',
      type: 'url',
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
