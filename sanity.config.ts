import { dashboardTool } from "@sanity/dashboard";
import { richDate } from "@sanity/rich-date-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { structureTool } from "sanity/structure";

// Structure and schema imports
import { schema } from "./schemas/schema";
import deskStructure from "./structure/deskStructure";

export default defineConfig([
  {
    basePath: "/production",
    name: "production",
    title: "Site de production",
    projectId: "xpg3ofue",
    dataset: "production",
    plugins: [
      structureTool({
        structure: deskStructure,
        defaultDocumentNode: (S, { schemaType }) => {
          if (schemaType === "page") {
            return S.document().views([
              S.view.form(),
              // S.view.component(myCustomPreview).title('Aperçu')
            ]);
          }
          return S.document().views([S.view.form()]);
        },
      }),
      visionTool(),
      richDate(),
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: "Publier les modifications",
            sites: [
              {
                title: "Site web",
                apiId: "699d31df-6378-4d92-bc43-a0b61ea0aa4e",
                buildHookId: "6221ebd0aa6c42a589dc2b12",
                name: "Sanity Hook",
              },
            ],
          }),
        ],
      }),
    ],
    schema,
    document: {
      actions: (prev: any[], context: { schemaType: string }) => {
        if (context.schemaType === "adageMappings") {
          // Personnalisation des actions pour adageMappings
          return prev.filter((action) =>
            ["publish", "delete", "update", "create"].includes(action.action),
          );
        }
        if (context.schemaType === "department") {
          // Personnalisation des actions pour adageMappings
          return prev.filter((action) =>
            ["publish", "update"].includes(action.action),
          );
        }
        if (context.schemaType === "siteSettings") {
          return prev.filter((action) =>
            ["publish", "update"].includes(action.action),
          );
        }
        return prev;
      },
    },
  },
  {
    basePath: "/staging",
    name: "staging",
    title: "Développement",
    projectId: "xpg3ofue",
    dataset: "development",
    plugins: [
      structureTool({
        structure: deskStructure,
        defaultDocumentNode: (S, { schemaType }) => {
          if (schemaType === "page") {
            return S.document().views([
              S.view.form(),
              // S.view.component(myCustomPreview).title('Aperçu')
            ]);
          }
          return S.document().views([S.view.form()]);
        },
      }),
      visionTool(),
      richDate(),
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: "Publier les modifications",
            sites: [
              {
                title: "Site web",
                apiId: "699d31df-6378-4d92-bc43-a0b61ea0aa4e",
                buildHookId: "6221ebd0aa6c42a589dc2b12",
                name: "Sanity Hook",
              },
            ],
          }),
        ],
      }),
    ],
    schema,
    document: {
      actions: (prev: any[], context: { schemaType: string }) => {
        if (context.schemaType === "adageMappings") {
          // Personnalisation des actions pour adageMappings
          return prev.filter((action) =>
            ["publish", "delete", "update", "create"].includes(action.action),
          );
        }
        if (context.schemaType === "department") {
          // Personnalisation des actions pour adageMappings
          return prev.filter((action) =>
            ["publish", "update"].includes(action.action),
          );
        }
        if (context.schemaType === "siteSettings") {
          return prev.filter((action) =>
            ["publish", "update"].includes(action.action),
          );
        }
        return prev;
      },
    },
  },
]);
