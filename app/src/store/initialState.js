import projects from '../data/projects';
import resumeData from '../data/resumeData';
import references from '../data/referenceData';
import footerLinks from '../data/footerLinks';
import teamMembers from '../data/teamMembers';
import services from '../data/services';
import projectCategories from '../data/projectCategories';
import technologies from '../data/technologies';

const initialState = {
  services,
  teamMembers,
  resumeData,
  references,
  footerLinks,
  technologies,
  portfolio: {
    projects,
    searchTerm: '',
    categories: projectCategories,
    selectedCategory: { name: 'All', value: 'all' }
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
