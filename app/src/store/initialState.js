import projects from '../data/projects';
import resumeData from '../data/resumeData';
import references from '../data/referenceData';
import footerLinks from '../data/footerLinks';
import teamMembers from '../data/teamMembers';
import services from '../data/services';
import projectCategories from '../data/projectCategories';

const initialState = {
  services,
  teamMembers,
  resumeData,
  references,
  footerLinks,
  portfolio: {
    projects,
    categories: projectCategories,
    selectedCategory: { name: 'All', key: 'all' }
  },
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
