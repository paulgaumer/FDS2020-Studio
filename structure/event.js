import S from '@sanity/desk-tool/structure-builder';
import { GoArchive as AllIcon } from 'react-icons/go';

const event = S.listItem()
  .title('Evenements')
  .child(
    S.list()
      .title('Evenements')
      .items([S.documentTypeListItem('event').title('Tous').icon(AllIcon)])
  );

export default event;
