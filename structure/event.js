// Structure minimale pour les événements
import { ListItemBuilder } from 'sanity/structure';
import { FaCalendarPlus } from 'react-icons/fa';

const event = new ListItemBuilder()
  .title('Evénements')
  .icon(FaCalendarPlus)
  .child(
    new ListItemBuilder()
      .title('Tous les événements')
      .schemaType('event')
  );

export default event;