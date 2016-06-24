import projects from '../data/projects';

const initialState = {
  projects,
  posts: {
    items: [],
    isFetching: false,
    categories: [],
    selectedCategory: null
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
