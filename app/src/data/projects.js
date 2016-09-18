const projects = [
  {
    id: 0,
    category: 'frontend',
    title: 'React Weekly',
    type: 'Front End Single Page App',
    description: `Front End Single Page application
      built with a focus on performance and UX.
      Custom built back end running GraphQL, Python and Node JS. `,
    milestones: [
      'Front End Milestones:',
      'Implemented Advanced Webpack Code Chunking and server rendering to increase performance exponentiallt',
      'Followed the feature-first approach, whereby components exist in isolation from the app, encouraging encapsulation and reusability.',
      'Wrote dozens of scalable react components and connected containers.',
      'Followed functional programming best practices, utilizing the immutable architecture and encapsulating business logic in the Redux store.',
      'As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality',
      'Back End Milestones:',
      'Implemented a custom GraphQL schema.',
      'Wrote an Express JS Server to serve content in real-time with increased I/O performance',
      'Integrated custom Python scripts in order to scrape the medium API for posts for the site.'
    ],
    technicalInformation: {
      description: "Built with functional JavaScript, ES2015, React, Redux, Grommet, CSS Modules, following the unidirectional data-flow architecture.  Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code.  Built a custom GraphQL back end schema.",
      tags: [
        'React',
        'Redux',
        'GraphQL',
        'Flux',
        'ES2015',
        'ExpressJS',
        'Python'
      ]
    },
    designPatterns: {
      description: 'Most notably, the app utilizes A11y accessibility and UX best practices.  It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques.  On the back end, it follows the micro-service architecture, serving data via a sinlge endpoint with GraphQL.',
      tags: [
        'A11y',
        'Webpack Chunking',
        'GraphQL',
        'Flux',
        'Unidirectional Data Flow',
        'Functional Reactive Programming',
        'Python Scripting',
        'Micro services'
      ]
    },
    repositoryURL: 'https://github.com/RyanCCollins/react-weekly',
    appStoreUrl: '',
    projectUrl: 'http://www.reactweekly.co/',
    featureImage: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-mockup-2.jpg?raw=true',
    caption: 'Performance Oriented SPA, React & GraphQL',
    images: [
      {
        id: 0,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-main.png?raw=true',
        width: 1416,
        height: 824,
        aspectRatio: 1.7,
        lightboxImage: {
          caption: 'Main Page Top Section',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-main.png?raw=true'
        }
      },
      {
        id: 1,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/about-main.png?raw=true',
        width: 1416,
        height: 824,
        aspectRatio: 1.7,
        lightboxImage: {
          caption: 'About Page Main',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/about-main.png?raw=true'
        }
      },
      {
        id: 2,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/made-with.png?raw=true',
        width: 1416,
        height: 824,
        aspectRatio: 1.7,
        lightboxImage: {
          caption: 'Made With',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/made-with.png?raw=true'
        }
      },
      {
        id: 3,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-all.png?raw=true',
        width: 1418,
        height: 8159,
        aspectRatio: 0.17,
        lightboxImage: {
          caption: 'Main All Content',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-all.png?raw=true'
        }
      },
      {
        id: 2,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/about-all.png?raw=true',
        width: 1418,
        height: 3478,
        aspectRatio: 0.40,
        lightboxImage: {
          caption: 'About All Content',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/about-all.png?raw=true'
        }
      }
    ]
  },
  {
    id: 1,
    category: 'frontend',
    title: 'Restaurant Reviewer App',
    type: 'A11y Best Practices',
    description: `Full Stack web application built with a focus
      on UX and A11y Accessibility best practices.  Shows a list
      of restaurants retrieved through a web scraper and corresponding
      reviews for the restaurants.  The application allows users to submit
      new reviews for restaurants and focuses on providing a world-class
      user experience no matter the end-user's device.`,
    milestones: [
      'Front End Milestones:',
      'Followed the feature-first approach, whereby components exist in isolation from the app, encouraging encapsulation and reusability.',
      'Wrote dozens of scalable react components and connected containers.',
      'Followed functional programming best practices, utilizing the immutable architecture and encapsulating business logic in the Redux store.',
      'As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality',
      'Back End Milestones:',
      'Wrote unit tests using RSpec, providing a solid framework for the app',
      'Utilized the Ruby on Rails v.5 API only mode in an effort to build a micro-service oriented API to serve JSON data to the front end.',
      'Utilized Docker to encourage maximum scalability and build automation.',
      'As always, followed the Ruby style guide and best practices.'
    ],
    technicalInformation: {
      description: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture.  Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code.  Built a Rails API to serve and persist data for the application.",
      tags: [
        'React',
        'Redux',
        'Flux',
        'ES2015',
        'Rails',
        'PostgreSQL',
        'RSpec'
      ]
    },
    designPatterns: {
      description: 'Most notably, the app utilizes A11y accessibility and UX best practices.  It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques.  On the back end, it follows the micro-service architecture, serving custom endpoints via a RESTful API.  The application uses Docker to automate the build process.',
      tags: [
        'A11y',
        'Flux',
        'Unidirectional Data Flow',
        'Functional Reactive Programming',
        'Build Automation',
        'Micro services',
        'REST'
      ]
    },
    repositoryURL: 'https://github.com/RyanCCollins/restaurant-reviewer',
    appStoreUrl: '',
    projectUrl: 'https://restaurant-reviewer-client.herokuapp.com',
    featureImage: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/restaurantreviewermock.jpg?raw=true',
    caption: 'Restaurant Reviewer A11y Best Practices App',
    images: [
      {
        id: 0,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpagetop.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Main Page Top Section',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpagetop.png?raw=true'
        }
      },
      {
        id: 10,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpagerestaurants.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Main Page Restaurants Section',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpagerestaurants.png?raw=true'
        }
      },
      {
        id: 20,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpageloading.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Main Page Loading',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpageloading.png?raw=true'
        }
      },
      {
        id: 30,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpageskiplinks.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Main Page Skip Links',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpageskiplinks.png?raw=true'
        }
      },
      {
        id: 40,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpagemain.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Review Page Main',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpagemain.png?raw=true'
        }
      },
      {
        id: 50,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpagemodal.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Review Page Modal',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpagemodal.png?raw=true'
        }
      },
      {
        id: 60,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpagereview.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Review Page Review',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpagereview.png?raw=true'
        }
      },
      {
        id: 70,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpageaddreview.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'Review Page Add Review',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpageaddreview.png?raw=true'
        }
      },
      {
        id: 80,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/aboutpagetop.png?raw=true',
        width: 1200,
        height: 960,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'About Page Top Section',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/aboutpagetop.png?raw=true'
        }
      },
      {
        id: 90,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpageall.png?raw=true',
        width: 600,
        height: 1588,
        aspectRatio: 0.37,
        lightboxImage: {
          caption: 'Main Page All',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/mainpageall.png?raw=true'
        }
      },
      {
        id: 100,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpageall.png?raw=true',
        width: 600,
        height: 1490,
        aspectRatio: 0.40,
        lightboxImage: {
          caption: 'Review Page Whole',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/reviewpageall.png?raw=true'
        }
      },
      {
        id: 110,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/aboutpageall.png?raw=true',
        width: 900,
        height: 1293,
        aspectRatio: 0.46,
        lightboxImage: {
          caption: 'About Page All',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/aboutpageall.png?raw=true'
        }
      }
    ]
  },
  {
    id: 2,
    category: 'frontend',
    title: 'Open Source Boilerplates',
    type: 'Best Practices Boilerplates and Generators',
    description: `Released two open-source boilerplates, multiple scaffolding tools and React component generators using the knowledge and best
      practices gained from working on several large-scale React projects.
      The boilerplates aim to implement best practices for developing with cutting-edge JavaScript
      in 2016 and both provide a useful starting place for any of my projects going forward.
      The generators automate all of the most time consuming parts of working with React,
      scaffolding out components, containers, action creators, reducers and
      tests in a similar fashion to Rails.  The two projects showcase seperate
      organizational strategies, offering multiple options for different situations.`,
    milestones: [
      'Used the experience gained from scaling several large-scale React projects to create multiple open source projects for others to use to learn the best practices.',
      'Created demo applications using React and Redux to showcase the projects',
      'Wrote slush generators that scaffolds out the starter projects',
      'Created scaffolding generators to automate the creation of react / redux components and containers',
      'Wrote a contribution guide and maintained an open-source community that uses the best practices outlined in the boilerplate project',
      'As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality'
    ],
    technicalInformation: {
      description: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture.  Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code.  Uses the react-redux connect method to hook up react components to the redux store.",
      tags: [
        'React',
        'Redux',
        'Flux',
        'ES2015',
        'CSS Modules',
        'Mocha',
        'Expect',
        'React-Redux',
        'Gulp'
      ]
    },
    designPatterns: {
      description: 'Both boilerplates utilize the Flux unidirectional data flow architecture.  The scalable project implements the feature-first organizational pattern, providing maximum scalability.',
      tags: [
        'Flux',
        'Unidirectional Data Flow',
        'ESLint Config AirBnb',
        'Feature First'
      ]
    },
    repositoryURL: 'https://github.com/RyanCCollins/react-redux-simple-starter',
    appStoreUrl: '',
    projectUrl: 'https://github.com/RyanCCollins/scalable-react-boilerplate',
    featureImage: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/boiler-main.png?raw=true',
    caption: 'Best Practices Boilerplate, Scaffolding Tool, NPM Module and Generator',
    images: [
      {
        id: 0,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/boiler-main.png?raw=true',
        width: 3082,
        height: 1726,
        aspectRatio: 1.7775,
        lightboxImage: {
          caption: 'Example application',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/boiler-main.png?raw=true'
        }
      },
      {
        id: 1,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/npm-package.png?raw=true',
        width: 1200,
        height: 1100,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'NPM Package',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/npm-package.png?raw=true'
        }
      },
      {
        id: 2,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/readme-boilerplate.png?raw=true',
        width: 1200,
        height: 1100,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Readme for Boilerplate Project',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/readme-boilerplate.png?raw=true'
        }
      },
      {
        id: 3,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/scalable.png?raw=true',
        width: 1200,
        height: 1100,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Scalable React Boilerplate',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/scalable.png?raw=true'
        }
      }
    ]
  },
  {
    id: 10,
    category: 'frontend',
    title: 'Public Transportation',
    type: 'Offline First Single Page Web Application',
    description: `Developed an offline-first, progressive web application
      that allows selection of train stations from a map and loads a train
      schedule in real-time.  Using cutting edge offline technologies such as Service Worker,
      the application intelligently caches all of the data and assets, making the application
      function both on and offline. `,
    milestones: [
      'Built a dynamic single page application using offline first technologies',
      'Transpiled cutting edge JavaScript with ES6 using Babel',
      'Implemented service worker and IDB to provide persistent offline data',
      'Utilized reachability to determine when the app was offline',
      'Wrote several dozen reusable React components',
      'Utilized Redux and unidirectional data-flow to manage dynamic state predictably',
      'Wrote tests to eliminate regressions and provide a solid user experience',
      'As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality'
    ],
    technicalInformation: {
      description: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture.  Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code.  Uses the react-redux connect method to hook up react components to the redux store.",
      tags: [
        'React',
        'Redux',
        'Flux',
        'ES2015',
        'CSS Modules',
        'Mocha',
        'Expect',
        'React-Redux'
      ]
    },
    designPatterns: {
      description: 'Most notably, this app uses the Flux unidirectional data-flow architecture and functional reactive programming techniques.  Follows best practices for stateless functional components.',
      tags: [
        'Flux',
        'Unidirectional Data Flow',
        'Functional Reactive Programming',
        'Stateless Functional Components'
      ]
    },
    repositoryURL: 'https://github.com/RyanCCollins/public-transportation',
    appStoreUrl: '',
    projectUrl: 'http://public-transporation-sw.herokuapp.com/',
    featureImage: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/map.png?raw=true',
    caption: 'Project 2 for Senior Web Nanodegree.',
    images: [
      {
        id: 0,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/map.png?raw=true',
        width: 1200,
        height: 1200,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'Train Schedule Search',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/map.png?raw=true'
        }
      },
      {
        id: 1,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/slideout.png?raw=true',
        width: 1200,
        height: 1200,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'Slide Out Nav',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/slideout.png?raw=true'
        }
      },
      {
        id: 2,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/confirm-details.png?raw=true',
        width: 1200,
        height: 1200,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'Confirm Details',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/confirm-details.png?raw=true'
        }
      },
      {
        id: 3,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/about.png?raw=true',
        width: 1200,
        height: 1200,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'About Page',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/about.png?raw=true'
        }
      },
      {
        id: 4,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/schedule.png?raw=true',
        width: 1200,
        height: 1800,
        aspectRatio: 1.5,
        lightboxImage: {
          caption: 'Train Schedule',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/schedule.png?raw=true'
        }
      },
      {
        id: 5,
        src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/help.png?raw=true',
        width: 1200,
        height: 1200,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'Help Page',
          src: 'https://github.com/RyanCCollins/cdn/blob/master/public-transportation/help.png?raw=true'
        }
      }
    ]
  },
  {
    id: 20,
    category: 'frontend',
    title: 'Meetup Event Planner',
    type: 'React Single Page App',
    description: `Built a dynamic single page application using React and
      Redux showcasing best practices for building dynamic and interactive web forms built
      to increase conversions. Built a responsive web application that allows the user to establish a meet-up event.`,
    milestones: [
      'Followed ES2015 best practices',
      'Crafted reusable modules using webpack as a module bundler',
      'Utilized cutting-edge functional reactive programming techniques',
      'Authored a single page app utilizing React JS, Redux, among other notable JavaScript libraries',
      'Created several dozen reusable stateful and stateless functional React components using best practices',
      'As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality.',
      'Wrote tests utilizing Mocha and the Expect assertion library to provide solid code and eliminate regressions.',
      'Utilized the Flux unidirectional data architecture',
      'Used CSS modules and followed the best practices for scalable React as noted by Max Stoibr'
    ],
    technicalInformation: {
      description: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture.  Utilizes best practices for scaling of React Apps. Unit tests written with Expect and, Mocha and JSDOM to provide high quality code.  Uses the react-redux connect method to hook up react components to the redux store.",
      tags: [
        'React',
        'Redux',
        'Flux',
        'ES2015',
        'CSS Modules',
        'Mocha',
        'Expect',
        'React-Redux'
      ]
    },
    designPatterns: {
      description: 'Most notably, this app uses the Flux unidirectional data-flow architecture and functional reactive programming techniques.  Follows best practices for stateless functional components.',
      tags: [
        'Flux',
        'Unidirectional Data Flow',
        'Functional Reactive Programming',
        'Stateless Functional Components'
      ]
    },
    repositoryURL: 'https://github.com/RyanCCollins/meetups',
    appStoreUrl: '',
    projectUrl: 'https://meetup-events-planner.firebase.com/',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/main-mockup.jpg',
    caption: 'Project 1 for Senior Web Nanodegree.',
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/landing-page.png',
        width: 1200,
        height: 900,
        aspectRatio: 1.333,
        lightboxImage: {
          caption: 'Landing Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/landing-page.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/signin-page.png',
        width: 1200,
        height: 900,
        aspectRatio: 1.333,
        lightboxImage: {
          caption: 'Sign in Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/signin-page.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/signup-page.png',
        width: 1200,
        height: 900,
        aspectRatio: 1.333,
        lightboxImage: {
          caption: 'Signup Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/signup-page.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/meetup-dashboard.png',
        width: 1200,
        height: 900,
        aspectRatio: 1.333,
        lightboxImage: {
          caption: 'Meetup Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/meetup-event-planner/meetup-dashboard.png'
        }
      }
    ]
  },
  {
    id: 30,
    category: 'ios',
    title: 'Hacksmiths App',
    type: 'iOS Mobile App - Swift',
    description: `Followed best practices to design and develop the Hacksmiths.io app,
      a professional iOS mobile app built for the members of the Hacksmiths.
      Implemented best practices for design and user experience, creating a functional and aesthetically
      appealing application. \r\n
      Founded by Ryan Collins and Sean Craig, the Hacksmiths are a group of software professionals working
      collaboratively in a virtual environment in an effort to solve real world problems through the
      development of software. We build tools designed to help non-profit organizations streamline their
      philanthropic efforts, utilizing industry best practices and advanced software development methodologies.`,
    milestones: [
      "Designed a polished User Interface using Apple's UIKit libraries, Cocoapods and custom views.",
      "Implemented a scalable Node.js API with a persistent MongoDB store to synch server data in real-time to the app.",
      "Integrated push notifications both app and server-side",
      "Implemented a complex Core Data model to persist data on the device, providing a seamless offline experience.",
      "Utilized Promises via the PromiseKit library to provide an elegant Asynchronous experience.",
      "Implemented the Model View Presenter and Model View Controller patterns.",
      "Utilized custom Protocols to create modular components.",
      "Developed an extremely elegant and complex networking client, creating a fast and reliable service layer for the application."
    ],
    technicalReview: {
      snippet: "This is one of the best apps I've reviewed. Your coding style is amazing and reading the code was a breeze. Also the design was especially professional.",
      url: 'https://review.udacity.com/#!/reviews/159729',
      author: 'Spiros Raptis'
    },
    technicalInformation: {
      description: "Built in Swift 2.2 using a multitude of Apple Libraries and Cocoapods. Implements Promises to create a seamless Asynchronous experience.",
      tags: [
        'Swift',
        'CoreData',
        'Cocoapods',
        'PromiseKit'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Model View Presenter and Model View Controller paradigms, along with the Delegate / Protocol Pattern.',
      tags: [
        'Model View Controller',
        'Model View Presenter',
        'Delegate Pattern',
        'Protocol Oriented'
      ]
    },
    repositoryURL: 'https://github.com/RyanCCollins/hacksmiths-app',
    appStoreUrl: 'http://appstore.com/hacksmiths',
    projectUrl: 'http://hacksmiths.io',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/hacksmiths-app/master/IMG_0408%202_iphone6plus_gold_side2.png',
    caption: 'iOS Mobile Application built for the Hacksmiths.',
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/community.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Community Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/community%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/community.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/community%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/community%403x.PNG'
          ]
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/event.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Event Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/event%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/event.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/event%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/event%403x.PNG'
          ]
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/idea-submission.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Idea Submission Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/idea-submission%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/idea-submission.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/idea-submission%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/idea-submission%403x.PNG'
          ]
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/loading.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Loading Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/loading%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/loading.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/loading%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/loading%403x.PNG'
          ]
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/participants.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Participants Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/participants%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/participants.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/participants%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/participants%403x.PNG'
          ]
        }
      },
      {
        id: 5,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/person.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Person Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/person%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/person.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/person%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/person%403x.PNG'
          ]
        }
      },
      {
        id: 6,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile-edit.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Profile Edit Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile-edit%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile-edit.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile-edit%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile-edit%403x.PNG'
          ]
        }
      },
      {
        id: 7,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Profile Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/profile%403x.PNG'
          ]
        }
      },
      {
        id: 8,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/slideout.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Slideout Nav',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/slideout%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/slideout.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/slideout%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-ios/slideout%403x.PNG'
          ]
        }
      }
    ]
  },
  {
    id: 40,
    title: 'Hacksmiths Website',
    category: 'frontend',
    type: "Web Application",
    description: `Implemented the Foundation web framework and React JS to
      design and develop a multi user web application for the members of the Hacksmiths.
      Built a multi-user blog for members of the site and implemented both server rendered Jade
      views and dynamic React JS components.`,
    technicalInformation: {
      description: "Built with server rendered Jade views, utilizing the MVC architecture and the Foundation responsive web framework.  Implemented several React JS components, utilizing ES6 and Webpack.  Utilized Gulp to automate the build process and allow for the usage of preprocessors, including Sass.",
      tags: [
        'React JS',
        'Sass',
        'Foundation',
        'KeystoneJS',
        'ES6',
        'Webpack',
        'Gulp'
      ]
    },
    milestones: [
      'Built an authentication system to allow for multi users on the site',
      'Built a web API to provide data to multiple clients',
      'Implemented a custom designed Front End web site',
      'Utilized the Foundation web framework to build an attractive front end web application',
      'Automated the build process, using Gulp and Webpack',
      'Implemented server-rendered Jade views',
    ],
    designPatterns: {
      description: 'Implements the Model View Controller design pattern, 12 Factor Micro-Services, build automation.',
      tags: [
        'Model View Controller',
        'Build Automation',
        'Micro Services',
        '12 Factor'
      ]
    },
    appStoreUrl: '',
    projectUrl: 'http://hacksmiths.io',
    repositoryURL: 'https://github.com/RyanCCollins/hacksmiths-website',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/main-mockup-web.png',
    caption: 'Web API and Front End built for the Hacksmiths members.',
    images: [
      {
        id: 0,
        caption: 'Landing Page',
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/landing.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/landing.png',
          caption: 'Hacksmiths Landing Page'
        }
      },
      {
        id: 1,
        caption: 'What We Do',
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/what%20we%20do.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'What We Do',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/what%20we%20do.png'
        }
      },
      {
        id: 2,
        caption: 'Events Page',
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/events.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Events Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/events.png'
        }
      },
      {
        id: 3,
        caption: 'Members Page',
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/members.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'Members Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/members.png'
        }
      },
      {
        id: 4,
        caption: 'Who We Are',
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/who%20we%20are.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'Who We Are Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/who%20we%20are.png'
        }
      },
      {
        id: 5,
        caption: 'Blog',
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/blog.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'Multi User Blog',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/blog.png'
        }
      }
    ]
  },
  {
    id: 50,
    title: 'Hacksmiths API, Admin Dashboard',
    category: 'backend',
    type: "Full Stack Web API",
    description: `Followed best practices to build a Node JS web API containing
      data driven microservices and React JS / Keystone JS Admin Dashboard.
      Backed by MongoDB, the API serves multiple clients, including the web app and the iOS app.`,
    technicalInformation: {
      description: "Built with NodeJS, Express, MongoDB and KeystoneJS, utilizing the MVC architecture.  Utilized Jade to render views server side and implemented a fast and functional admin dashboard to provide easy access to the site's data.  Utilized the Twitter and Github APIs as OAuth providers for the app and deployed via Docker, automating the process of Continuous Delivery.",
      tags: [
        'React JS',
        'NodeJS',
        'Express',
        'MongoDB',
        'KeystoneJS',
        'Docker'
      ]
    },
    milestones: [
      'Built a scalable backend using Node JS, Express JS',
      'Implemented a custom admin dashboard using React and KeystoneJS',
      'Automated the build process, following the 12 factor guidelines to build a scalable app',
      'Implemented server-rendered Jade views',
      'Architected a data system utilizing MongoDB, serving data to multiple clients via a REST API'
    ],
    designPatterns: {
      description: 'Implements the Model View Controller design pattern, 12 Factor Micro-Services, build automation.',
      tags: [
        'Model View Controller',
        'Build Automation',
        'Micro Services',
        '12 Factor'
      ]
    },
    appStoreUrl: '',
    projectUrl: 'http://hacksmiths.io',
    repositoryURL: 'https://github.com/RyanCCollins/hacksmiths-website',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-hacksmiths-main.jpg',
    caption: 'Web API and Front End built for the Hacksmiths members.',
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-all.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Admin List',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-all.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-events.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Admin Event Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-events.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-login.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Admin Login',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-login.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-meta.png',
        width: 1200,
        height: 1080,
        aspectRatio: 1.1,
        lightboxImage: {
          caption: 'Admin Meta',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-meta.png'
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-filter.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'Admin Filter Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-filter.png'
        }
      },
      {
        id: 5,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-gallery.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'Admin Gallery',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-gallery.png'
        }
      }
    ]
  },
  {
    id: 60,
    title: 'RyanCollins.io',
    category: 'frontend',
    type: 'React SPA',
    description: 'My masterpiece.  A culmination of all of my advanced web knowledge, RyanCollins.io is a professionally designed and developed single page web application.  Built using cutting edge technologies and advanced techniques and design patterns, including React, Redux, ES6, Webpack.  The site communicates with a custom built API built on Node JS.  The sites data is made available through the Node API and is stored in MongoDb.  The backend boasts a ReactJS built admin dashboard, for updating all of the dynamic data on the site.',
    repositoryURL: 'https://github.com/RyanCCollins/ryancollins.io',
    projectUrl: 'http://ryancollins.io',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/ryancollins.io/master/ryancollins.io-mockup.jpg',
    caption: 'Front End single page web application built for Ryan Collins using cutting edge web technologies.',
    milestones: [
      'Implemented cutting edge Javascript including Webpack and React',
      'Utilized Redux to provide predictable state to the application',
      'Built several dozen custom components, focusing on reusability and best practices',
      'Implemented the best features of ES6 using Babel to transpile to ES6.',
      'Created stateless functional and stateful ES6 Class components using JSX best practices and style.',
      'Utilized the AirBnb style guide to improve code readability and eliminate errors.',
      'Implemented Enzyme testing to test React Components.'
    ],
    technicalInformation: {
      description: "Built from the ground up using best practices with React, Redux, Webpack, etc.  The site bootstraps via ExpressJS to webpack and compiles ES6 and JSX into a single page application.  React router provides all routing except for when the admin dashboard is accessed.  Utilizes Webpack Sass loader to compile into globally usable CSS modules using CSS classname best practices.",
      tags: [
        'JSX',
        'React',
        'React Router',
        'SASS / CSS Modules',
        'Animations',
        'Foundation',
        'Keystone',
        'Webpack'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Flux architecture and Redux to provide unidirectional data flow and predictable and immutable application state.  Implements the JSX and ES6 AirBnb style guides.',
      tags: [
        'Redux',
        'Flux',
        'Immutable',
        'Best Practices',
        'AirBnb Style Guides'
      ]
    },
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/landing.png',
        width: 1080,
        height: 1080,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'Landing Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/landing.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/about.png',
        width: 1080,
        height: 1080,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'About Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/about.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/portfolio.png',
        width: 1080,
        height: 1080,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'Portfolio Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/portfolio.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/references.png',
        width: 1080,
        height: 1080,
        aspectRatio: 1,
        lightboxImage: {
          caption: 'References Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/references.png'
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/languages.png',
        width: 1080,
        height: 768,
        aspectRatio: 1.41,
        lightboxImage: {
          caption: 'Languages Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/languages.png'
        }
      },
      {
        id: 5,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/qualifications.png',
        width: 1080,
        height: 768,
        aspectRatio: 1.41,
        lightboxImage: {
          caption: 'Qualifications Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/qualifications.png'
        }
      },
      {
        id: 6,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/skills.png',
        width: 1080,
        height: 768,
        aspectRatio: 1.41,
        lightboxImage: {
          caption: 'Skills Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/ryancollins-io/skills.png'
        }
      }
    ]
  },
  {
    id: 70,
    title: 'Food Drivr - iOS App',
    type: 'iOS Mobile Application',
    category: 'ios',
    description: 'Coordinated collaborative efforts to create open source software with 18 ' +
      'experienced software developers from no less than 5 countries across the world. Leading ' +
      'the team in creating the Food Drivr project and building a JSON REST API for the project ' +
      'utilizing the Ruby on Rails web framework. Orchestrated the creation of multiple software ' +
      'clients for the project, including an iOS Mobile App, REST API, Data Analytic platform, ' +
      'Admin Dashboard and ReactJS web Frontend.  The Food Drivr website and mobile app serves to ' +
      'make it dead simple to donate edible food to the hungry. Open the app, press a button and a ' +
      'driver will come pick it up, bringing it to the less fortunate.',
    milestones: [
      'Utilized the Model View Controller and Model View Presenter architectures',
      'Led a team of 18 developers to build the project from the ground up',
      'Provided support and guidance to the team, coordinating the creation of a multi-client application and API.',
    ],
    technicalInformation: {
      description: 'Built in Swift using XCode, the application was built using best practices and design patterns.',
      tags: [
        'Swift',
        'Realm',
        'Cocoapods',
        'PromiseKit'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Model View Presenter and Model View Controller paradigms, along with the Delegate / Protocol Pattern.',
      tags: [
        'Model View Controller',
        'Model View Presenter',
        'Delegate Pattern',
        'Protocol Oriented'
      ]
    },
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr-ios',
    featureImage: 'https://s3.amazonaws.com/accredible-api-projects/previews/5329/large/1465160757326?1465160244',
    caption: 'iOS Mobile application, utilizing an Uber model to combat food waste.',
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/accepting.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Accepting Donation',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/accepting%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/accepting.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/accepting%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/accepting%403x.PNG'
          ]
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Profile View',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/profile%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/profile.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/profile%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/profile%403x.PNG'
          ]
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Idea Submission Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance%403x.PNG'
          ]
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-history.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Donation History',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-history%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-history.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-history.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/donation-history.PNG'
          ]
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/mapview.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Donation Map View',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/mapview%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/mapview.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/mapview%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/mapview%403x.PNG'
          ]
        }
      },
      {
        id: 5,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/pending-donations.PNG',
        width: 375,
        height: 667,
        aspectRatio: 0.5622,
        lightboxImage: {
          caption: 'Pending Donations',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/pending-donations%403x.PNG',
          srcSet: [
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/pending-donations.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/pending-donations%402x.PNG',
            'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-app/pending-donations%403x.PNG'
          ]
        }
      }
    ]
  },
  {
    id: 80,
    title: 'Food Drivr - React Web App',
    type: 'Front End Web',
    category: 'frontend',
    description: 'Coordinated collaborative efforts and contributed to the development of a React JS web application for the Food Drivr project.',
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr-frontend',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/wastenotmock.jpg',
    caption: 'React JS Application built to streamline food donations via the Food Drivr platform.',
    milestones: [
      'Implemented cutting-edge Javascript, including React, ES6 and Webpack.',
      'Wrote a client-side API layer utilizing a Promise based approach, providing a seamless asynchronous experience.',
      'Implemented Material-UI and custom React components, providing a reactive experience.'
    ],
    technicalInformation: {
      description: "Built with React JS the application is a Single Page App that compiles via Webpack Hot Module Reloading.  It is truly as cutting edge as it gets, implementing the best parts of ES6 through the use of Babel.  It utilizes a number of NPM modules, Post CSS and boasts custom design by the Hacksmiths resident designer, Sean Craig.",
      tags: [
        'PostCSS',
        'React JS',
        'Webpack',
        'Hot Module Reloading',
        'Promises',
        'Axios'
      ]
    },
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/donate.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Donate Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/donate.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/donate-einstein.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Donate Page With History',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/donate-enstein.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/confirm.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Confirm Donation',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/confirm.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/landing-section-one.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Landing Section One',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/landing-section-one.png'
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/landing-section-two.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Landing Section Two',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/landing-section-two.png'
        }
      },
      {
        id: 5,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/landing-section-three.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Landing Section Three',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/landing-section-three.png'
        }
      },
      {
        id: 6,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/profile-one.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Profile One',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/profile-one.png'
        }
      },
      {
        id: 7,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/profile-two.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Profile Two',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/profile-two.png'
        }
      },
      {
        id: 8,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/signup.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Main Signup Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/signup.png'
        }
      },
      {
        id: 9,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/volunteer-signup.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Volunteer Signup Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/volunteer-signup.png'
        }
      },
      {
        id: 10,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/donor-signup.png',
        width: 1024,
        height: 768,
        aspectRatio: 1.33,
        lightboxImage: {
          caption: 'Donor Signup Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/donor-signup.png'
        }
      }
    ],
    designPatterns: {
      description: 'Utilizes the AirBnB JS Style Guide, the Flux and Model View Controller Architectures, HTML 5 and CSS best practices.',
      tags: [
        'Model View Controller',
        'Flux',
        'HTML 5',
        'CSS',
        'AirBnB Style Guide'
      ]
    }
  },
  {
    id: 90,
    title: 'Food Drivr - Rails API',
    category: 'backend',
    type: 'Back End Web',
    description: 'Coordinated collaborative efforts and lead the ' +
      'development team of the Food Drivr food donation web and mobile applications. \r\n' +
      'The Food Drivr website and mobile app serves to make it dead simple to donate edible ' +
      'food to the hungry. Open the app, press a button and a driver will come pick it up, bringing it to the less fortunate',
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr',
    projectUrl: 'http://teamhacksmiths.github.io/food-drivr-api-documentation',
    featureImage: 'https://raw.githubusercontent.com/teamhacksmiths/food-drivr-frontend/master/food-drivr-donate-mock.jpg',
    caption: 'Rails JSON API and Back End built to drive the Food Drivr project.',
    milestones: [
      'Led the development of a scalable REST API utilizing the Ruby on Rails web framework.',
      'Utilized Docker to completely automate the deployment and allow for maximum scalability.',
      'Implemented a PostgreSQL database, providing an API to persist data for the project.',
      'Wrote tests utilizing Rspec to eliminate regressions.',
      'Wrote comprehensive documentation to provide sustainability to the project.'
    ],
    technicalInformation: {
      description: "Built with Ruby on Rails, utilizing Docker to automate the build, a PostgreSQL database and RSpec to eliminate regressions.",
      tags: [
        'Ruby on Rails',
        'Docker',
        'PostgreSQL',
        'RSpec',
        'REST',
        'API'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Model View Controller pattern and the AirBnb Ruby Style Guide. Followed the REST architecture, implementing a modern and stable API.',
      tags: [
        'Model View Controller',
        'AirBnB Ruby Style Guide',
        'REST'
      ]
    },
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs-errors.png',
        width: 1500,
        height: 1200,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'API Docs Error Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs-errors.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs-two.png',
        width: 1500,
        height: 1200,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'API Docs Error Page',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs-two.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs.png',
        width: 1500,
        height: 1200,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'API Docs First Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs.png',
        width: 1500,
        height: 1200,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'API Entity Relationship Diagram',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-erd.png'
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-specs.png',
        width: 1500,
        height: 1200,
        aspectRatio: 1.25,
        lightboxImage: {
          caption: 'API Entity Relationship Diagram',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-specs.png'
        }
      }
    ]
  },
  {
    id: 100,
    title: 'Virtual Tourist',
    category: 'ios',
    type: 'iOS Mobile',
    description: 'A production ready iOS App that utilizes best practices and conventional design patterns including MVC, Protocol Oriented and Object Oriented Programming, the Delegate Pattern, etc. Built using a multitude of libraries and frameworks from Apple and others including CoreData, UIKit, CoreNetworking, the Flickr API, and several Cocoa Pod based libraries.',
    repositoryURL: 'https://github.com/RyanCCollins/Virtual-Tourist',
    projectUrl: '',
    featureImage: 'https://s3.amazonaws.com/accredible_api_evidence_items/previews/91872/large/1457463514150?1457463261',
    caption: 'Udacity iOS Nanodegree Project 4',
    milestones: [
      'Implemented a custom built networking API using the NSURLSession and other Apple classes',
      'Used Object Oriented Swift and functional programming techniques.',
      'Utilized the Flickr API to download photos based on the location of a dropped pin.',
      'Implemented Core Data to persist downloaded data to the device',
    ],
    technicalReview: {
      snippet: 'What an awesome project! There are a lot extra implementations that really make this app special. The UI looks great and the animations are a nice addition. I also like the use of NSNotifications in the app. Its apparent that you understand the material, and decided to take on some additional specs to challenge yourself and have some fun.',
      url: 'https://review.udacity.com/#!/reviews/101166',
      author: 'Cody Fazio'
    },
    technicalInformation: {
      description: "Built with Swift 2.0, the project implements a number of Apple and Open Source modules and libraries.  It implements the Flickr API and a custom built Core Data backed API service layer.",
      tags: [
        'Swift',
        'CoreData',
        'Cocoapods',
        'UIKit',
        'CoreNetworking',
        'Flickr API'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Model View Controller pattern and the Ray Wenderleich Swift Style Guide, along with the Protocol and Delegate Patterns.',
      tags: [
        'Model View Controller',
        'Protocol Oriented',
        'Delegate Pattern',
        'Swift Style Guide'
      ]
    },
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-one.PNG',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image One',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-one.PNG'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-two.PNG',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image Two',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-two.PNG'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-three.PNG',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image Three',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-three.PNG'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-four.PNG',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image Four',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-four.PNG'
        }
      }
    ]
  },
  {
    id: 110,
    title: 'On the Map',
    category: 'ios',
    type: 'iOS Mobile',
    description: 'A production ready iOS App that utilizes best practices and conventional design patterns including MVC, Protocol Oriented and Object Oriented Programming, the Delegate Pattern, etc. Built using a multitude of libraries and frameworks from Apple and others including UIKit, CoreNetworking, the Parse API, and several Cocoa Pod based libraries.',
    repositoryURL: 'https://github.com/RyanCCollins/On-the-Map',
    projectUrl: '',
    featureImage: 'https://s3.amazonaws.com/accredible_api_evidence_items/previews/83055/large/1458350177272?1458350105',
    caption: 'Udacity iOS Nanodegree Project 3',
    milestones: [
      'Implemented a custom built networking API using the NSURLSession and other Apple classes',
      'Used Object Oriented Swift and functional programming techniques.',
      'Utilized the Parse API to download network data from a backend API.',
      'Built custom map views to show location data on the map.',
    ],
    technicalReview: {
      snippet: 'Great job with your code. It is really clear, logical, and easy to follow. It is a very thoughtful and complete design. The graphics are very attractive.',
      url: 'https://review.udacity.com/#!/reviews/74894',
      author: 'Steven OToole'
    },
    technicalInformation: {
      description: "Built with Swift 2.0, the project implements a number of Apple and Open Source modules and libraries.  It implements the Parse API and a custom built API service layer.",
      tags: [
        'Swift',
        'Cocoapods',
        'UIKit',
        'CoreNetworking',
        'Parse API'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Model View Controller pattern and the Ray Wenderleich Swift Style Guide, along with the Protocol and Delegate Patterns.',
      tags: [
        'Model View Controller',
        'Protocol Oriented',
        'Delegate Pattern',
        'Swift Style Guide'
      ]
    },
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/on-the-map/on-the-map.png',
        width: 280,
        height: 500,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'On The Map iOS App Image One',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/on-the-map/on-the-map.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/on-the-map/on-the-map2.png',
        width: 280,
        height: 500,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'On The Map iOS App Image Two',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/on-the-map/on-the-map2.png'
        }
      }
    ]
  },
  {
    id: 120,
    title: 'Tech Rapport',
    category: 'frontend',
    type: 'Front End Web',
    description: 'Developed a responsive website for the Tech Rapport Consulting Agency using best practices.  ' +
      'The site is built with Bootstrap, HTML5, CSS3, Javascript, jQuery, the Liquid templating language, Ruby Gems  and more.  ' +
      'It uses SASS as a preprocessor and features parallax and other animation effects to showcase my design and programming skills.  ' +
      'The site was designed based on mockups from a designer.  \r\n' +
      'The site is generated using Jekyll, which converts Markdown files into HTML by passing them through ' +
      'templates that I created using Liquid, HTML, SASS, etc.   The site is served via GitHub pages using a Grunt build ' +
      'that minifies and optimizes the website for production.',
    repositoryURL: 'https://github.com/RyanCCollins/techrapport.github.io',
    projectUrl: 'http://techrapport.com',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/main.jpg',
    caption: 'Front End Website built for the Tech Rapport Consulting Agency',
    milestones: [
      'Implemented page speed optimizations utilizing Grunt as a build tool, receiving a Page Rank score of 99.',
      'Built interactive components utilizing jQuery and vanilla Javascript',
      'Wrote complex templates, breaking down the CSS and HTML design into reusable components for the site.',
      'Implemented organization techniques for the sites components and data.'
    ],
    technicalInformation: {
      description: "Built from the ground up using best practices, Grunt Automation, SASS, the Liquid templating language, et. al.  The data for the site is hosted in Markdown on github, which is converted into HTML via Jekyll.  The site is designed using Bootstrap and custom elements.  It showcases interactive components including bar and circle charts, tasteful animations and others.",
      tags: [
        'Grunt',
        'SASS',
        'Animations',
        'Jekyll',
        'Bootstrap',
        'jQuery',
        'Ruby Gems'
      ]
    },
    designPatterns: {
      description: 'Utilizes automation techniques, image optimization and code minification to improve performance, Markdown generated static HTML, and best practices for code reuse with JavaScript / jQuery.',
      tags: [
        'Automation',
        'Image Optimization',
        'Minification',
        'Best Practices'
      ]
    },
    images: [
      {
        id: 0,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/about-me.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'About Me Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/about-me.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/milestones.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'About Me Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/milestones.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/services.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'About Me Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/services.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/work-process.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'About Me Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/work-process.png'
        }
      },
      {
        id: 4,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/skills.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'Strengths Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/skills.png'
        }
      },
      {
        id: 5,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/certifications.png',
        width: 1200,
        height: 768,
        aspectRatio: 1.5625,
        lightboxImage: {
          caption: 'About Me Section',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/techrapport/certifications.png'
        }
      }
    ]
  }
];

export default projects;
