![Ryancollins.io logo](https://raw.githubusercontent.com/RyanCCollins/ryancollins.io/master/ryancollins.io-logo.png)

Rewrite of my professional portfolio and blog utilizing React, Redux, Keystone, Node, MongoDb, Foundation, etc.

Running a Node API with a Mongo DB backed database.  I couldn't find blogging software suitable to my needs, so I wrote my own.  Blog posts are loaded through the admin dashboard and served through the API to redux.  On the front end, the posts are loaded by React dynamically using Redux's connect and the content is parsed as Markdown.  Neat :D.

## Getting Started
The application utilizes Webpack and Webpack dev server.  The package.json is setup with all of the install and other scripts to make setup running and building a breeze.

Run
```
npm install
```

from the root of the project directory, followed by
```
npm run start
```

## Deployment
Deployed via Docker to AWS EC2.

## Built With
React,
Redux,
Webpack,
Foundation,
MongoDb,
Node,
Keystone


## Authors

* **Ryan Collins**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
A big thanks to all of the project contributors for the libraries used in this project.

## Screen Shots
![RyanCollins.io Mocks](https://raw.githubusercontent.com/RyanCCollins/ryancollins.io/master/ryancollins.io-mockup.jpg)
