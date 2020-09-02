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
              .defaultOrdering([{ field: 'name', direction: 'asc' }])
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
              .defaultOrdering([{ field: 'name', direction: 'asc' }])
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
          .title('Par Public')
          .child(
            // List out all categories
            S.documentTypeList('audience')
              .title('Evénements par Public')
              .defaultOrdering([{ field: 'name', direction: 'asc' }])
              .child((audienceId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('event')
                  .title('Evénements')
                  .filter('_type == "event" && $audienceId in audience[]._ref')
                  .params({ audienceId })
              )
          ),
        S.listItem()
          .title('Par Département')
          .child(
            // List out all categories
            S.documentTypeList('department')
              .title('Evénements par département')
              .defaultOrdering([{ field: 'name', direction: 'asc' }])
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
        S.listItem()
          .title('Par Village des Sciences')
          .child(
            // List out all categories
            S.documentTypeList('village')
              .title('Evénements par Village des Sciences')
              .defaultOrdering([{ field: 'department', direction: 'asc' }])
              .child((villageId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('event')
                  .title('Evénements')
                  .filter('_type == "event" && $villageId == village._ref')
                  .params({ villageId })
              )
          ),
        S.listItem()
          .title('Scolaires')
          .schemaType('event')
          .child(
            S.documentList()
              .title('Par Scolaires')
              .filter('_type == "event" && education')
          ),
      ])
  );

export default event;
