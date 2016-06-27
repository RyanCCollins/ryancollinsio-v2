import projects from '../data/projects';
import resumeData from '../data/resumeData';
import references from '../data/referenceData';

const initialState = {
  projects,
  resumeData,
  references,
  posts: {
    items: [],
    isFetching: false,
    categories: [],
    tags: [],
    selectedCategory: { name: 'All', key: 'all' }
  },
  messages: {
    alertVisible: false,
    posts: []
  },
  errors: {
    posts: []
  }
};

export default initialState;
