import projects from '../data/projects';

const initialState = {
  projects,
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
