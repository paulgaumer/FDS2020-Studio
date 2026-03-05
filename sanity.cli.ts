import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "xpg3ofue",
    dataset: "production",
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: "79da4d87fff895cda720d767",
  },
});
