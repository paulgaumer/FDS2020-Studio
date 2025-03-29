export default {
    title: 'Format',
    name: 'formatMapping',
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
                type: 'format',
            },
            title: 'Equivalent dans le back-office',
            validation: (Rule) => Rule.required(),
        },
    ],
};
