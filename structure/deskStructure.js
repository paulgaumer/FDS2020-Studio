import S from '@sanity/desk-tool/structure-builder';
import {
  GoSettings,
  GoTag,
  GoFileMedia,
  GoPerson,
  GoBriefcase,
} from 'react-icons/go';
import { FaParagraph } from 'react-icons/fa';
import event from './event';

export default () =>
  S.list()
    .title('Gestion de contenu')
    .items([
      S.listItem()
        .title('Paramètres du site')
        .icon(GoSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      event,
      S.documentTypeListItem('projectOwner')
        .title('Porteurs de projets')
        .icon(GoBriefcase),
      S.documentTypeListItem('ambassador').title('Ambassadeurs').icon(GoPerson),
      S.documentTypeListItem('logo').title('Logos').icon(GoFileMedia),
      S.divider(),
      S.documentTypeListItem('department').title('Départements').icon(GoTag),
      S.documentTypeListItem('theme').title('Thèmes').icon(GoTag),
      S.documentTypeListItem('format').title('Formats').icon(GoTag),
      S.divider(),
      S.documentTypeListItem('page').title('Pages & Texte').icon(FaParagraph),
    ]);
