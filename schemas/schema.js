// Schema minimal pour tester le build
import { Schema } from '@sanity/schema';
import { defineType } from '@sanity/types';

// Un type de document simple
const simpleDoc = defineType({
  name: 'simpleDoc',
  title: 'Simple Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ]
});

export default new Schema({
  name: 'test',
  types: [simpleDoc],
});