import { StructureBuilder, StructureResolver } from "sanity/structure";
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
} from "react-icons/go";
import { FaParagraph, FaCampground } from "react-icons/fa";
import event from "./event";

const deskStructure: StructureResolver = (S: StructureBuilder) => {
  return S.list()
    .title("Gestion de contenu")
    .items([
      // Section Événements
      S.listItem()
        .title("Événements")
        .icon(GoPlay)
        .child(
          S.list()
            .title("Événements")
            .items([
              event(S),
              S.listItem()
                .title("Événements en ligne")
                .icon(GoPlay)
                .child(
                  S.documentTypeList({
                    schemaType: "onlineEvent",
                    id: "onlineEvent",
                  }),
                ),
              S.listItem()
                .title("Villages des Sciences")
                .icon(FaCampground)
                .child(
                  S.documentTypeList({ schemaType: "village", id: "village" }),
                ),
            ]),
        ),

      S.divider(),

      // Section Contenu
      S.listItem()
        .title("Contenu")
        .icon(GoFile)
        .child(
          S.list()
            .title("Contenu")
            .items([
              S.listItem()
                .title("Actualités")
                .icon(GoFile)
                .child(S.documentTypeList({ schemaType: "news", id: "news" })),
              S.listItem()
                .title("Porteurs de projets")
                .icon(GoBriefcase)
                .child(
                  S.documentTypeList({
                    schemaType: "projectOwner",
                    id: "projectOwner",
                  }),
                ),
              S.listItem()
                .title("Ambassadeurs")
                .icon(GoPerson)
                .child(
                  S.documentTypeList({
                    schemaType: "ambassador",
                    id: "ambassador",
                  }),
                ),
              S.listItem()
                .title("Logos")
                .icon(GoFileMedia)
                .child(S.documentTypeList({ schemaType: "logo", id: "logo" })),
              S.listItem()
                .title("Press Kit")
                .icon(GoBroadcast)
                .child(
                  S.documentTypeList({
                    schemaType: "pressKit",
                    id: "pressKit",
                  }),
                ),
              S.listItem()
                .title("Témoignages")
                .icon(GoBroadcast)
                .child(
                  S.documentTypeList({
                    schemaType: "testimonials",
                    id: "testimonials",
                  }),
                ),
            ]),
        ),

      // Section Quiz
      S.listItem()
        .title("Quiz")
        .icon(GoLightBulb)
        .child(
          S.list()
            .title("Quiz")
            .items([
              S.listItem()
                .title("Quiz Visiteurs")
                .icon(GoLightBulb)
                .child(
                  S.documentTypeList({
                    schemaType: "quizByDepartment",
                    id: "quizByDepartment",
                  }),
                ),
              S.listItem()
                .title("Quiz Anniversaire 2021")
                .icon(GoLightBulb)
                .child(
                  S.documentTypeList({
                    schemaType: "quiz2021",
                    id: "quiz2021",
                  }),
                ),
            ]),
        ),

      S.divider(),

      // Section Taxonomies
      S.listItem()
        .title("Taxonomies")
        .icon(GoTag)
        .child(
          S.list()
            .title("Taxonomies")
            .items([
              S.listItem()
                .title("Thèmes")
                .icon(GoTag)
                .child(
                  S.documentTypeList({ schemaType: "theme", id: "theme" }),
                ),
              S.listItem()
                .title("Formats")
                .icon(GoTag)
                .child(
                  S.documentTypeList({ schemaType: "format", id: "format" }),
                ),
              S.listItem()
                .title("Public")
                .icon(GoTag)
                .child(
                  S.documentTypeList({
                    schemaType: "audience",
                    id: "audience",
                  }),
                ),
              S.listItem()
                .title("Départements")
                .icon(GoTag)
                .child(
                  S.documentTypeList({
                    schemaType: "department",
                    id: "department",
                  }),
                ),
            ]),
        ),

      // Section Technique
      S.listItem()
        .title("Technique")
        .icon(GoGear)
        .child(
          S.list()
            .title("Technique")
            .items([
              S.listItem()
                .title("Contacts Départementaux")
                .icon(GoTag)
                .child(
                  S.documentTypeList({
                    schemaType: "contactDepartment",
                    id: "contactDepartment",
                  }),
                ),
              S.listItem()
                .title("Correspondance adage")
                .icon(GoGear)
                .child(
                  S.documentTypeList({
                    schemaType: "adageMappings",
                    id: "adageMappings",
                  }),
                ),
            ]),
        ),

      S.divider(),

      // Section Configuration
      S.listItem()
        .title("Configuration")
        .icon(GoGear)
        .child(
          S.list()
            .title("Configuration")
            .items([
              S.listItem()
                .title("Pages & Texte")
                .icon(FaParagraph)
                .child(S.documentTypeList({ schemaType: "page", id: "page" })),
              S.listItem()
                .title("Liens du menu")
                .icon(GoTag)
                .child(
                  S.documentTypeList({ schemaType: "route", id: "route" }),
                ),
              S.listItem()
                .title("Paramètres du site")
                .icon(GoGear)
                .child(
                  S.documentTypeList({
                    schemaType: "siteSettings",
                    id: "siteSettings",
                  }),
                ),
            ]),
        ),
    ]);
};

export default deskStructure;
