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
import eventsIndexPageBlock from './objects/customPages/eventsIndexPage';
import multimediaPageBlock from './objects/customPages/multimediaPage';
import scolairesPageBlock from './objects/customPages/scolairesPage';
import footerBlock from './objects/customPages/footerBlock.js';
import featuredBlock from './objects/customPages/featuredBlock.js';
import villageBlock from './objects/customPages/villageBlock.js';
import mentionsLegalesPageBlock from './objects/customPages/mentionsLegalesPage';
import youtube from './objects/youtube';
import featureDesc from './objects/featureDesc';
import richDate from 'part:@sanity/form-builder/input/rich-date/schema';
import timeSlot from './objects/timeSlot';
import pressContact from './objects/pressContact';
import audienceCustom from './objects/audienceCustom';
import inputTypeQuestion from './objects/quiz2021/inputTypeQuestion';
import selectTypeQuestion from './objects/quiz2021/selectTypeQuestion';
import associationTypeQuestion from './objects/quiz2021/associationTypeQuestion';
import selectTypeOption from './objects/quiz2021/selectTypeOption';
import associationTypeOption from './objects/quiz2021/associationTypeOption';
import quiz21ConditionsPageBlock from './objects/customPages/quiz2021ConditionsPage';
import faqQuestion from './objects/faqQuestion';
import questionnairePage from './objects/customPages/questionnairePage';
import documentField from './objects/documentField';

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
import onlineEvent from './documents/onlineEvent';
import page from './documents/page';
import contact from './documents/contact';
import pressKit from './documents/pressKit';
import village from './documents/village';
import quizByDepartment from './documents/quiz';
import quiz2021 from './documents/quiz2021';

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
    onlineEvent,
    page,
    contact,
    pressKit,
    village,
    quizByDepartment,
    quiz2021,
  ]),
});
