// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// OBJECTS
import blockContent from './objects/blockContent';
import mainImage from './objects/mainImage';
import openGraph from './objects/openGraph';
import addressGps from './objects/addressGps';
import editorialPageBlock from './objects/customPages/editorialPage';
import contactPageBlock from './objects/customPages/contactPage';
import homePageBlock from './objects/customPages/homePage';
import covidPageBlock from './objects/customPages/covidPage';
import scolairesPageBlock from './objects/customPages/scolairesPage';
import footerBlock from './objects/customPages/footerBlock.js';
import mentionsLegalesPageBlock from './objects/customPages/mentionsLegalesPage';
import youtube from './objects/youtube';
import featureDesc from './objects/featureDesc';
import richDate from 'part:@sanity/form-builder/input/rich-date/schema';
import timeSlot from './objects/timeSlot';
import pressContact from './objects/pressContact';

// DOCUMENTS
import ambassador from './documents/ambassador';
import siteSettings from './documents/siteSettings';
import logo from './documents/logo';
import department from './documents/department';
import theme from './documents/theme';
import format from './documents/format';
import audience from './documents/audience';
import projectOwner from './documents/projectOwner';
import event from './documents/event';
import page from './documents/page';
import contact from './documents/contact';
import pressKit from './documents/pressKit';
import village from './documents/village';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'website',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // OBJECT TYPES
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    openGraph,
    mainImage,
    addressGps,
    youtube,
    featureDesc,
    richDate,
    editorialPageBlock,
    contactPageBlock,
    covidPageBlock,
    scolairesPageBlock,
    footerBlock,
    mentionsLegalesPageBlock,
    homePageBlock,
    timeSlot,
    pressContact,
    // _____________________
    //DOCUMENTS TYPES
    // The following are document types which will appear
    // in the studio.
    ambassador,
    siteSettings,
    logo,
    department,
    theme,
    format,
    audience,
    projectOwner,
    event,
    page,
    contact,
    pressKit,
    village,
  ]),
});
