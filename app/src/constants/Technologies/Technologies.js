const Categories = {
  backend: 'Back End Web',
  frontend: 'Front End Web',
  ios: 'iOS Mobile'
};

const TechnologySectionHeader = 'Technologies I Love to Use';

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
  },
  {
    id: 6,
    name: 'MongoDB',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png',
    category: Categories.backend
  },
  {
    id: 7,
    name: 'Docker',
    imageUrl: 'https://xebia.com/assets/uploads/docker%20logo.png',
    category: Categories.backend
  },
  {
    id: 8,
    name: 'Webpack & Phoenix',
    imageUrl: 'http://matthewlehner.net/images/webpack-and-phoenix-on-elixir-104e5ffe.svg',
    category: Categories.backend
  },
  {
    id: 9,
    name: 'Foundation',
    imageUrl: 'https://incident57.com/codekit/images/help/logo-zurb@2x.svg',
    category: Categories.frontend
  }
];

export {
  Technologies,
  TechnologySectionHeader
};
