import projects from '../data/projects';
import resumeData from '../data/resumeData';

const initialState = {
  projects,
  resumeData,
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
