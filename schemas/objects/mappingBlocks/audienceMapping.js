export default {
    title: 'Audience',
    name: 'audienceMapping',
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
                type: 'audience',
            },
            title: 'Equivalent dans le back-office',
            validation: (Rule) => Rule.required(),
        },
    ],
};
