import projects from '../data/projects';
import author from '../data/defaultAuthor';

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
  },
  author
};

export default initialState;
