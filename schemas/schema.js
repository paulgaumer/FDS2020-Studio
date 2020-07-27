// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// OBJECTS
import blockContent from './objects/blockContent';
import mainImage from './objects/mainImage';
import openGraph from './objects/openGraph';

// DOCUMENTS
import post from './documents/post';
import ambassador from './documents/ambassador';
import siteSettings from './documents/siteSettings';
import logo from './documents/logo';
import department from './documents/department';
import theme from './documents/theme';
import format from './documents/format';
import projectOwner from './documents/projectOwner';
import event from './documents/event';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'website',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //DOCUMENTS TYPES
    // The following are document types which will appear
    // in the studio.
    post,
    ambassador,
    siteSettings,
    logo,
    department,
    theme,
    format,
    projectOwner,
    event,
    // _____________________
    // OBJECT TYPES
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    openGraph,
    mainImage,
  ]),
});
