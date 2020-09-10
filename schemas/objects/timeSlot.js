export default {
  title: 'Créneau Horaire',
  name: 'timeSlot',
  type: 'object',
  fieldsets: [
    {
      name: 'startField',
      options: {
        columns: 2,
      },
    },
    {
      name: 'endField',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'startDate',
      type: 'date',
      title: 'Date de début',
      description: 'Choisir une date',
      fieldset: 'startField',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startTime',
      type: 'string',
      title: 'Heure de début',
      description: 'Respecter le format: "00:00"',
      fieldset: 'startField',
      validation: (Rule) =>
        Rule.required().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
          name: '00:00',
        }),
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'Date de fin',
      description: 'Choisir une date',
      fieldset: 'endField',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endTime',
      type: 'string',
      title: 'Heure de fin',
      description: 'Respecter le format: "00:00"',
      fieldset: 'endField',
      validation: (Rule) =>
        Rule.required().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
          name: '00:00',
        }),
    },
  ],
  preview: {
    select: {
      startDate: 'startDate',
      endDate: 'endDate',
      startTime: 'startTime',
      endTime: 'endTime',
    },
    prepare(selection) {
      const { startDate, endDate, startTime, endTime } = selection;
      return {
        title: `${startDate} -> ${endDate}`,
        subtitle: `${startTime} -> ${endTime}`,
      };
    },
  },
};
