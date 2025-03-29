export default {
    title: 'Département',
    name: 'departmentMapping',
    type: 'object',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Libellé exact dans le questionnaire',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'destination',
            type: 'reference',
            to: {
                type: 'department',
            },
            title: 'Equivalent dans le back-office',
            validation: (Rule) => Rule.required(),
        },
    ],
};
