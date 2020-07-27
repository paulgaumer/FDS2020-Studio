import S from '@sanity/desk-tool/structure-builder';
import {
  GoSettings,
  GoTag,
  GoFileMedia,
  GoPerson,
  GoBriefcase,
} from 'react-icons/go';
import event from './event';

export default () =>
  S.list()
    .title('Gestion de contenu')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Paramètres du site')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form()])
        ),
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
    ]);
