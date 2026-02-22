import { structureTool } from 'sanity/structure';
import { 
  ListBuilder, 
  DocumentTypeListBuilder, 
  ListItemBuilder
} from 'sanity/structure';

const S = {
  list: () => new ListBuilder(),
  documentTypeListItem: (type) => new DocumentTypeListBuilder({ schemaType: type }),
  divider: () => S.listItem().title('---'), // Divider temporaire
  listItem: () => new ListItemBuilder(),
  // editor: () => new Editor(), // Désactivé pour l'instant
};
import {
  GoGear,
  GoTag,
  GoFileMedia,
  GoPerson,
  GoBriefcase,
  GoBroadcast,
  GoPlay,
  GoLightBulb,
  GoFile,
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
      S.documentTypeListItem('news')
        .title('Actualités')
        .icon(GoFile),
      S.documentTypeListItem('projectOwner')
        .title('Porteurs de projets')
        .icon(GoBriefcase),
      S.documentTypeListItem('ambassador').title('Ambassadeurs').icon(GoPerson),
      S.documentTypeListItem('logo').title('Logos').icon(GoFileMedia),
      S.documentTypeListItem('pressKit').title('Press Kit').icon(GoBroadcast),
      S.documentTypeListItem('testimonials').title('Témoignages').icon(GoBroadcast),
      S.documentTypeListItem('quizByDepartment')
        .title('Quiz Visiteurs')
        .icon(GoLightBulb),
      S.documentTypeListItem('quiz2021')
        .title('Quiz Anniversaire 2021')
        .icon(GoLightBulb),
      S.divider(),
      S.documentTypeListItem('theme').title('Thèmes').icon(GoTag),
      S.documentTypeListItem('format').title('Formats').icon(GoTag),
      S.documentTypeListItem('audience').title('Public').icon(GoTag),
      S.documentTypeListItem('department').title('Départements').icon(GoTag),
      S.documentTypeListItem('contactDepartment')
        .title('Contacts Départementaux')
        .icon(GoTag),
      S.documentTypeListItem('adageMappings')
        .title('Correspondance adage')
        .icon(GoGear),
      S.divider(),
      S.documentTypeListItem('page').title('Pages & Texte').icon(FaParagraph),
      S.divider(),
      S.documentTypeListItem('route').title('Liens du menu').icon(GoTag),
      S.documentTypeListItem('siteSettings')
        .title('Paramètres du site')
        .icon(GoGear),
    ]);
