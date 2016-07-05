const projects = [
  {
    id: 1,
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
    id: 2,
    title: 'Hacksmiths Website',
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
    id: 3,
    title: 'Hacksmiths API, Admin Dashboard',
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
    id: 4,
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
    id: 5,
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
          caption: 'Donation Map View',
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
    id: 6,
    title: 'Food Drivr - React Web App',
    type: 'Front End Web',
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
    id: 7,
    title: 'Food Drivr - Rails API',
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
    id: 8,
    title: 'Virtual Tourist',
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
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-one.png',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image One',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-one.png'
        }
      },
      {
        id: 1,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-two.png',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image Two',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-two.png'
        }
      },
      {
        id: 2,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-three.png',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image Three',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-three.png'
        }
      },
      {
        id: 3,
        src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-four.png',
        width: 1125,
        height: 2001,
        aspectRatio: 0.56,
        lightboxImage: {
          caption: 'Virtual Tourist iOS App Image Four',
          src: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/virtual-tourist/image-four.png'
        }
      }
    ]
  },
  {
    id: 9,
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
    id: 10,
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
