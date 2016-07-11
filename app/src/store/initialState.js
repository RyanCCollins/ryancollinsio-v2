import projects from '../data/projects';
import resumeData from '../data/resumeData';
import references from '../data/referenceData';
import footerLinks from '../data/footerLinks';
import teamMembers from '../data/teamMembers';
import services from '../data/services';

const initialState = {
  services,
  projects,
  teamMembers,
  resumeData,
  references,
  footerLinks,
  contact: {
    params: {},
    isFetching: false
  },
  posts: {
    items: [],
    isFetching: false,
    categories: [],
    tags: [],
    selectedCategory: { name: 'All', key: 'all' }
  },
  messages: {
    posts: [],
    contact: []
  },
  errors: {
    posts: [],
    contact: []
  }
};

export default initialState;
