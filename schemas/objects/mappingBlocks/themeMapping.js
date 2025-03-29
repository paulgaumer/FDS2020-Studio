export default {
    title: 'Theme',
    name: 'themeMapping',
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
                type: 'theme',
            },
            title: 'Equivalent dans le back-office',
            validation: (Rule) => Rule.required(),
        },
    ],
};
