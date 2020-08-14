import S from '@sanity/desk-tool/structure-builder';
import { GoArchive } from 'react-icons/go';
import { FaCalendarPlus } from 'react-icons/fa';

const event = S.listItem()
  .title('Evénements')
  .icon(FaCalendarPlus)
  .child(
    S.list()
      .title('Evénements')
      .items([
        S.documentTypeListItem('event')
          .title('Tous les événements')
          .icon(GoArchive),
        S.divider(),
        S.listItem()
          .title('Par Thème')
          .child(
            // List out all categories
            S.documentTypeList('theme')
              .title('Evénements par thème')
              .child((themeId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('event')
                  .title('Evénements')
                  .filter('_type == "event" && $themeId in theme[]._ref')
                  .params({ themeId })
              )
          ),
        S.listItem()
          .title('Par Format')
          .child(
            // List out all categories
            S.documentTypeList('format')
              .title('Evénements par format')
              .child((formatId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('event')
                  .title('Evénements')
                  .filter('_type == "event" && $formatId in format[]._ref')
                  .params({ formatId })
              )
          ),
        S.listItem()
          .title('Par Département')
          .child(
            // List out all categories
            S.documentTypeList('department')
              .title('Evénements par département')
              .child((departmentId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('event')
                  .title('Evénements')
                  .filter(
                    '_type == "event" && $departmentId == department._ref'
                  )
                  .params({ departmentId })
              )
          ),
      ])
  );

export default event;
