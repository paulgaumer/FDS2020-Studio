// import { dashboardTool } from '@sanity/dashboard';
// import { richDate } from '@sanity/rich-date-input';
// import { visionTool } from '@sanity/vision';
// import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Structure and schema imports
import schema from './schemas/schema.js';
import dashboardConfig from './structure/dashboardConfig.js';
import deskStructure from './structure/deskStructure.js';

export default defineConfig([{
    name: 'Production',
    projectId: 'xpg3ofue',
    dataset: 'production',
    plugins: [
        deskTool({ structure: deskStructure }),
    ],
    schema: {
        types: schema.types,
    }
}, {
    name: 'Staging',
    projectId: 'xpg3ofue',
    dataset: 'development',
    plugins: [
        deskTool({ structure: deskStructure }),
    ],
    schema: {
        types: schema.types,
    }
},]);