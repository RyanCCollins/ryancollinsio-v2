const Categories = {
  backend: 'Back End Web',
  frontend: 'Front End Web',
  ios: 'iOS Mobile'
};

const Technologies = [
  {
    id: 1,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg',
    name: 'Node JS',
    category: Categories.backend
  },
  {
    id: 2,
    name: 'Ruby on Rails',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Ruby_on_Rails_logo.svg',
    category: Categories.backend
  },
  {
    id: 3,
    name: 'React JS',
    imageUrl: 'http://www.aurorasolutions.io/wp-content/uploads/2016/02/react-logo_fi.png',
    category: Categories.frontend
  },
  {
    id: 4,
    name: 'Redux',
    imageUrl: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png',
    category: Categories.frontend
  },
  {
    id: 5,
    name: 'Swift',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/120px-Swift_logo.svg.png',
    category: Categories.ios
  }
];

export {
  Technologies
};
