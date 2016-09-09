[![Codacy grade](https://img.shields.io/codacy/grade/fb3bf4881b8d4b98a8a3ff59f47b14d4.svg?maxAge=2592000)](https://github.com/RyanCCollins/ryancollins.io)

![Ryancollins.io logo](https://raw.githubusercontent.com/RyanCCollins/ryancollins.io/master/ryancollins.io-logo.png)

# RyanCollins.io

Rewrite of my professional portfolio and blog utilizing React, Redux, Keystone, Node, MongoDb, Foundation, etc.

Running a Node API with a Mongo DB backed database.  I couldn't find blogging software suitable to my needs, so I wrote my own.  Blog posts are loaded through the admin dashboard and served through the API to redux.  On the front end, the posts are loaded by React dynamically using Redux's connect method and parsed as Markdown.

## Getting Started
The application utilizes Webpack and Webpack dev server.  The package.json is setup with all of the install and other scripts to make setup running and building a breeze.  Once running, view the app at: http://localhost:8080/

Run
```
npm install
```

from the root of the project directory, followed by
```
npm run start
```

Note that the server / API needs to be run to show blog posts.  You can get the server running with:
```
node keystone
```

To see the admin interface, go to /keystone.

## Deployment
Deployed to Heroku

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

## Timeline / Todos
* [x] Add a tech stack component
* [ ] Integrate Graphql


# License
This app is licensed under the MIT license.  Please see the [license file](https://github.com/RyanCCollins/ryancollins.io/blob/master/LICENSE) for details.

Feel free to reverse engineer, fork, copy, or do whatever you want with it!
