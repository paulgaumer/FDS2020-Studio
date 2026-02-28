import { StructureBuilder } from "sanity/structure";
import { GoArchive } from "react-icons/go";
import { FaCalendarPlus } from "react-icons/fa";

// Fonction pour créer des listes de documents filtrées avec des IDs stables
const createFilteredDocumentList =
  (S: StructureBuilder) =>
  (title: string, schemaType: string, filter: string, params = {}) => {
    return () => {
      // Générer un ID valide même lorsque params est vide
      const paramsKey =
        Object.keys(params).length > 0
          ? `-${Object.keys(params).join("-")}`
          : "";
      const id = `${schemaType}-${title.replaceAll(" ", "-").toLowerCase()}${paramsKey}`;
      return S.documentList()
        .id(id)
        .title(title)
        .schemaType(schemaType)
        .filter(filter)
        .params(params);
    };
  };

const event = (S: StructureBuilder) => {
  const createList = createFilteredDocumentList(S);
  return S.listItem()
    .title("Evénements")
    .icon(FaCalendarPlus)
    .child(
      S.list()
        .title("Evénements")
        .items([
          S.listItem()
            .title("Tous les événements")
            .schemaType("event")
            .icon(GoArchive)
            .child(
              S.documentList()
                .title("Tous les événements")
                .schemaType("event")
                .filter('_type == "event"'),
            ),
          S.divider(),
          S.listItem()
            .title("Par Thème")
            .child(
              S.documentTypeList("theme")
                .title("Evénements par thème")
                .defaultOrdering([{ field: "name", direction: "asc" }])
                .child((themeId: string) =>
                  createList(
                    "Evénements",
                    "event",
                    '_type == "event" && $themeId in theme[]._ref',
                    { themeId },
                  )(),
                ),
            ),
          S.listItem()
            .title("Par Format")
            .child(
              S.documentTypeList("format")
                .title("Evénements par format")
                .defaultOrdering([{ field: "name", direction: "asc" }])
                .child((formatId: string) =>
                  createList(
                    "Evénements",
                    "event",
                    '_type == "event" && $formatId in format[]._ref',
                    { formatId },
                  )(),
                ),
            ),
          S.listItem()
            .title("Par Public")
            .child(
              S.documentTypeList("audience")
                .title("Evénements par Public")
                .defaultOrdering([{ field: "name", direction: "asc" }])
                .child((audienceId: string) =>
                  createList(
                    "Evénements",
                    "event",
                    '_type == "event" && $audienceId in audience[]._ref',
                    { audienceId },
                  )(),
                ),
            ),
          S.listItem()
            .title("Par Département")
            .child(
              S.documentTypeList("department")
                .title("Evénements par département")
                .defaultOrdering([{ field: "name", direction: "asc" }])
                .child((departmentId: string) =>
                  createList(
                    "Evénements",
                    "event",
                    '_type == "event" && $departmentId == department._ref',
                    { departmentId },
                  )(),
                ),
            ),
          S.listItem()
            .title("Par Village des Sciences")
            .child(
              S.documentTypeList("village")
                .title("Evénements par Village des Sciences")
                .defaultOrdering([{ field: "department", direction: "asc" }])
                .child((villageId: string) =>
                  createList(
                    "Evénements",
                    "event",
                    '_type == "event" && $villageId in village[]._ref',
                    { villageId },
                  )(),
                ),
            ),
          S.listItem()
            .title("Scolaires")
            .child(
              createList(
                "Par Scolaires",
                "event",
                '_type == "event" && education',
              )(),
            ),
        ]),
    );
};

export default event;
