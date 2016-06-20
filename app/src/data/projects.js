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
    title: 'Hacksmiths Website',
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
        'Webpack'
      ]
    },
    milestones: [
      "Built a scalable backend using Node JS, Express JS",
      'Implemented a custom designed Front End web site',
    ],
    appStoreUrl: '',
    projectUrl: 'http://hacksmiths.io',
    repositoryURL: 'https://github.com/RyanCCollins/hacksmiths-website',
    featureImage: 'https://raw.githubusercontent.com/RyanCCollins/hacksmiths-website/master/Screen%20Shot%202016-06-05%20at%204.40.48%20PM_imac2013_left.png',
    caption: "Web API and Front End built for the Hacksmiths project."
  },
  {
    id: 3,
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
      description: "Built in Swift 2.2 using a multitude of Apple Libraries and Cocoapods.  Utilizes the Model View Presenter and Model View Controller paradigms.  Implements Promises to create a seamless Asynchronous experience.",
      tags: [
        'Swift',
        'CoreData',
        'Cocoapods',
        'MVP',
        'MVC',
        'PromiseKit'
      ]
    },
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr-ios',
    featureImage: 'https://s3.amazonaws.com/accredible-api-projects/previews/5329/large/1465160757326?1465160244',
    caption: 'iOS Mobile application, utilizing an Uber model to combat food waste.'
  },
  {
    id: 4,
    title: 'Food Drivr - React Web App',
    type: 'Front End Web',
    description: 'Coordinated collaborative efforts and contributed to the development of a React JS web application for the Food Drivr project.',
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr-frontend',
    featureImage: 'https://raw.githubusercontent.com/teamhacksmiths/food-drivr-frontend/master/food-drivr-screenshot.png',
    caption: 'React JS Application built to streamline food donations via the Food Drivr platform.'
  },
  {
    id: 5,
    title: 'Food Drivr - Rails API',
    type: 'Back End Web',
    description: '',
    repositoryURL: 'https://github.com/teamhacksmiths/food-drivr',
    featureImage: 'https://raw.githubusercontent.com/teamhacksmiths/food-drivr-frontend/master/donate.png',
    caption: 'Rails JSON API and Back End built to drive the Food Drivr project.'
  }
];

export default projects;
