import S from '@sanity/desk-tool/structure-builder';
import {
  GoSettings,
  GoTag,
  GoFileMedia,
  GoPerson,
  GoBriefcase,
  GoBroadcast,
  GoPlay,
} from 'react-icons/go';
import { FaParagraph, FaCampground } from 'react-icons/fa';
import event from './event';

export default () =>
  S.list()
    .title('Gestion de contenu')
    .items([
      event,
      S.documentTypeListItem('onlineEvent')
        .title('Evénements en ligne')
        .icon(GoPlay),
      S.documentTypeListItem('village')
        .title('Villages des Sciences')
        .icon(FaCampground),
      S.divider(),
      S.documentTypeListItem('projectOwner')
        .title('Porteurs de projets')
        .icon(GoBriefcase),
      S.documentTypeListItem('ambassador').title('Ambassadeurs').icon(GoPerson),
      S.documentTypeListItem('logo').title('Logos').icon(GoFileMedia),
      S.documentTypeListItem('pressKit').title('Press Kit').icon(GoBroadcast),
      S.divider(),
      S.documentTypeListItem('theme').title('Thèmes').icon(GoTag),
      S.documentTypeListItem('format').title('Formats').icon(GoTag),
      S.documentTypeListItem('audience').title('Public').icon(GoTag),
      S.documentTypeListItem('department').title('Départements').icon(GoTag),
      S.documentTypeListItem('contactDepartment')
        .title('Contacts Départementaux')
        .icon(GoTag),
      S.divider(),
      S.documentTypeListItem('page').title('Pages & Texte').icon(FaParagraph),
      S.divider(),
      S.listItem()
        .title('Paramètres du site')
        .icon(GoSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ]);
