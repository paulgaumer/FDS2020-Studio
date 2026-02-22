// Then import schema types from any plugins that might expose them
import { type } from '@sanity/type';
// First, we must import the schema creator
import { defineType, defineArrayMember } from '@sanity/type';
import { createSchema } from '@sanity/schema';

// DOCUMENTS
import adageMappings from './documents/adageMappings';
import ambassador from './documents/ambassador';
import audience from './documents/audience';
import contact from './documents/contact';
import department from './documents/department';
import event from './documents/event';
import format from './documents/format';
import logo from './documents/logo';
import news from './documents/news';
import onlineEvent from './documents/onlineEvent';
import page from './documents/page';
import pressKit from './documents/pressKit';
import projectOwner from './documents/projectOwner';
import quizByDepartment from './documents/quiz';
import quiz2021 from './documents/quiz2021';
import route from './documents/route';
import siteSettings from './documents/siteSettings';
import testimonials from './documents/testimonials';
import theme from './documents/theme';
import village from './documents/village';
import audienceCustom from './objects/audienceCustom';
// OBJECTS
import blockContent from './objects/blockContent';
import contactPageBlock from './objects/customPages/contactPage';
import covidPageBlock from './objects/customPages/covidPage';
// import addressGps from './objects/addressGps';
import editorialPageBlock from './objects/customPages/editorialPage';
import eventsIndexPageBlock from './objects/customPages/eventsIndexPage';
import featuredBlock from './objects/customPages/featuredBlock.js';
import footerBlock from './objects/customPages/footerBlock.js';
import homePageBlock from './objects/customPages/homePage';
import mentionsLegalesPageBlock from './objects/customPages/mentionsLegalesPage';
import multimediaPageBlock from './objects/customPages/multimediaPage';
import questionnairePage from './objects/customPages/questionnairePage';
import quiz21ConditionsPageBlock from './objects/customPages/quiz2021ConditionsPage';
import scolairesPageBlock from './objects/customPages/scolairesPage';
import villageBlock from './objects/customPages/villageBlock.js';
import documentField from './objects/documentField';
import faqQuestion from './objects/faqQuestion';
import featureDesc from './objects/featureDesc';
import keyFigure from './objects/keyFigure';
import mainImage from './objects/mainImage';
import audienceMapping from './objects/mappingBlocks/audienceMapping';
import departmentMapping from './objects/mappingBlocks/departmentMapping';
import formatMapping from './objects/mappingBlocks/formatMapping';
// MAPPING BLOCKS FOR ADAGE PAGE
import themeMapping from './objects/mappingBlocks/themeMapping';
import villageMapping from './objects/mappingBlocks/villageMapping';
import openGraph from './objects/openGraph';
import pressContact from './objects/pressContact';
import associationTypeOption from './objects/quiz2021/associationTypeOption';
import associationTypeQuestion from './objects/quiz2021/associationTypeQuestion';
import inputTypeQuestion from './objects/quiz2021/inputTypeQuestion';
import selectTypeOption from './objects/quiz2021/selectTypeOption';
import selectTypeQuestion from './objects/quiz2021/selectTypeQuestion';
import timeSlot from './objects/timeSlot';
import youtube from './objects/youtube';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'website',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: [
    // OBJECT TYPES
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    keyFigure,
    openGraph,
    mainImage,
    youtube,
    featureDesc,
    editorialPageBlock,
    contactPageBlock,
    multimediaPageBlock,
    eventsIndexPageBlock,
    covidPageBlock,
    scolairesPageBlock,
    footerBlock,
    featuredBlock,
    villageBlock,
    mentionsLegalesPageBlock,
    homePageBlock,
    quiz21ConditionsPageBlock,
    timeSlot,
    pressContact,
    audienceCustom,
    inputTypeQuestion,
    selectTypeQuestion,
    associationTypeQuestion,
    selectTypeOption,
    associationTypeOption,
    faqQuestion,
    questionnairePage,
    documentField,
    themeMapping,
    audienceMapping,
    formatMapping,
    departmentMapping,
    villageMapping,
    // _____________________
    //DOCUMENTS TYPES
    // The following are document types which will appear
    // in the studio.
    adageMappings,
    ambassador,
    siteSettings,
    logo,
    department,
    route,
    theme,
    format,
    audience,
    projectOwner,
    event,
    onlineEvent,
    page,
    contact,
    pressKit,
    village,
    quizByDepartment,
    quiz2021,
    news,
    testimonials,
  ]),
});
