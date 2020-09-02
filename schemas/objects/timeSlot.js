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
    },
    {
      name: 'startTime',
      type: 'string',
      title: 'Heure de début',
      description: 'Respecter le format: "09:00"',
      fieldset: 'startField',
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'Date de fin',
      description: 'Choisir une date',
      fieldset: 'endField',
    },
    {
      name: 'endTime',
      type: 'string',
      title: 'Heure de fin',
      description: 'Respecter le format: "09:00"',
      fieldset: 'endField',
    },
  ],
};
