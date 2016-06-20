const projects = [
  {
    id: 1,
    title: 'Hacksmiths App',
    type: 'iOS Mobile App - Swift',
    description: 'Followed best practices to design and develop the Hacksmiths.io app, ' +
    'a professional iOS mobile app built for the members of the Hacksmiths.  ' +
    'Implemented best practices for design and user experience, creating a functional and aesthetically ' +
    'appealing application. \r\n' +
    'Founded by Ryan Collins and Sean Craig, the Hacksmiths are a group of software professionals working ' +
    'collaboratively in a virtual environment in an effort to solve real world problems through the ' +
    'development of software. We build tools designed to help non-profit organizations streamline their ' +
    'philanthropic efforts, utilizing industry best practices and advanced software development methodologies.',
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
    caption: "iOS Mobile Application built for the Hacksmiths."
  },
  {
    id: 2,
    title: 'Hacksmiths Website, API, Admin Dashboard',
    type: "Web Application",
    description: 'Followed best practices to build a production ready, distributed backend web API containing ' +
      'data-driven micro-services built to drive the Hacksmiths philanthropic open source software projects.' +
      ' Integrated a responsive and functional admin dashboard built to interface with the sites data and services.  '+
      'Implemented a professionally designed Front End web interface built for the visitors and users of the site, ' +
      'utilizing the Foundation web framework.',
    technicalInformation: {
      description: "Built with NodeJS, Express, MongoDB, Foundation and KeystoneJS, utilizing the MVC architecture and the Foundation responsive web framework.  Utilized Jade to render views server side and implemented several React JS components, utilizing ES6 and Webpack.  Utilized the Twitter and Github APIs as OAuth providers for the app.",
      tags: [
        'React JS',
        'NodeJS',
        'Express',
        'MongoDB',
        'Foundation',
        'KeystoneJS',
        'ES6',
        'Webpack',
        'Docker'
      ]
    },
    milestones: [
      'Built a scalable backend using Node JS, Express JS',
      'Implemented a custom designed Front End web site',
      'Designed and implemented an admin dashboard to organize and maintain the sites data',
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
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/hacksmiths-website/master/Screen%20Shot%202016-06-05%20at%204.40.37%20PM_imac2013_front.png',
    images: [
      'https://raw.githubusercontent.com/RyanCCollins/hacksmiths-website/master/Screen%20Shot%202016-06-05%20at%204.41.03%20PM_imac2013_right.png',
      'https://raw.githubusercontent.com/RyanCCollins/hacksmiths-website/master/Screen%20Shot%202016-06-05%20at%204.40.48%20PM_imac2013_left.png'
    ],
    caption: 'Web API and Front End built for the Hacksmiths members.'
  },
  {
    id: 3,
    title: 'RyanCollins.io',
    type: 'Front End Web',
    description: 'My masterpiece.  A culmination of all of my advanced web knowledge, RyanCollins.io is a professionally designed and developed single page web application.  Built using cutting edge technologies and advanced techniques and design patterns, including React, Redux, ES6, Webpack.  The site communicates with a custom built API built on Node JS.  The sites data is made available through the Node API and is stored in MongoDb.  The backend boasts a ReactJS built admin dashboard, for updating all of the dynamic data on the site.',
    repositoryURL: 'https://github.com/RyanCCollins/ryancollins.io',
    projectUrl: 'http://ryancollins.io',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/ryancollins.io/master/ryancollins.io-mockup.jpg',
    caption: 'Front End single page web application built for Ryan Collins using cutting edge web technologies.',
    milestones: [
      'Implemented cutting edge Javascript including Webpack and React',
      'Utilized Redux to provide predictable state to the application',
      'Built several dozen custom components, focusing on reusability and best practices',
      'Implemented the best features of ES6 using Babel to transpile to ES5.',
      'Created stateless functional components using JSX best practices and style.',
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
    }
  },
  {
    id: 4,
    title: 'Food Drivr - iOS App',
    type: 'iOS Mobile Application',
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
      'Lead a team of 18 developers to build the project from the ground up',
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
    caption: 'iOS Mobile application, utilizing an Uber model to combat food waste.'
  },
  {
    id: 5,
    title: 'Food Drivr - React Web App',
    type: 'Front End Web',
    description: 'Coordinated collaborative efforts and contributed to the development of a React JS web application for the Food Drivr project.',
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr-frontend',
    featureImage: 'https://raw.githubusercontent.com/teamhacksmiths/food-drivr-frontend/master/wastenotmock.jpg',
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
    id: 6,
    title: 'Food Drivr - Rails API',
    type: 'Back End Web',
    description: 'Coordinated collaborative efforts and lead the ' +
      'development team of the Food Drivr food donation web and mobile applications. \r\n' +
      'The Food Drivr website and mobile app serves to make it dead simple to donate edible ' +
      'food to the hungry. Open the app, press a button and a driver will come pick it up, bringing it to the less fortunate',
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr',
    projectUrl: 'https://fooddrivr.com',
    featureImage: 'https://raw.githubusercontent.com/teamhacksmiths/food-drivr-frontend/master/donate.png',
    caption: 'Rails JSON API and Back End built to drive the Food Drivr project.',
    milestones: [
      'Lead the development of a scalable REST API utilizing the Ruby on Rails web framework.',
      'Utilized Docker to completely automate the deployment and allow for maximum scalability.',
      'Implemented a PostgreSQL database, providing an API to persist data for the project.',
      'Wrote tests utilizing Rspec to eliminate regressions.'
    ],
    technicalInformation: {
      description: "Built with Ruby on Rails, utilizing Docker to automate the build, a PostgreSQL database and RSpec to eliminate regressions.",
      tags: [
        'Ruby on Rails',
        'Docker',
        'PostgreSQL',
        'RSpec'
      ]
    },
    designPatterns: {
      description: 'Utilizes the Model View Controller pattern and the AirBnb Ruby Style Guide.',
      tags: [
        'Model View Controller',
        'AirBnB Ruby Style Guide'
      ]
    }
  },
  {
    id: 7,
    title: 'Digital Tourist',
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
    }
  },
  {
    id: 8,
    title: 'On the Map',
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
    }
  },
  {
    id: 9,
    title: 'Tech Rapport',
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
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/techrapport.github.io/master/mockups.jpg',
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
    }
  }
];

export default projects;
