import projects from '../data/projects';
import resumeData from '../data/resumeData';
import references from '../data/referenceData';

const initialState = {
  projects,
  resumeData,
  references,
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
