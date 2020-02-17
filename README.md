<img src="https://circleci.com/gh/w3bdesign/react-ecommerce/tree/master.svg?style=svg"> <img src="https://api.codeclimate.com/v1/badges/ec3dd668ce623ddb263d/maintainability" />
[![Netlify Status](https://api.netlify.com/api/v1/badges/fa283d61-4b14-45a2-a1c4-629cd351328b/deploy-status)](https://app.netlify.com/sites/react-c776ed/deploys) [![Greenkeeper badge](https://badges.greenkeeper.io/w3bdesign/react-ecommerce.svg)](https://greenkeeper.io/)
<img src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>

# React Ecommerce

This is currently a work in progress. 

Note that it currently does not support IE 11, but it is possible to add support via polyfills (https://www.npmjs.com/package/react-app-polyfill) and a redesign.

## Features

- Authentication with Firestore
- Data storage with Google Firebase
- Registration and login with email/password
- Redux
- Redux-persist
- Shopping cart
- Reselect (for Redux)
- Stripe
- Styled components (CSS in JS)
- Fully responsive design
- Detects IE and shows a warning that it is not supported

## Setup

Clone the repo and do a `npm install`

Setup a Firebase account with Google authentication and local authentication enabled, then add a Firebase database with
a collection called <b>users</b> and add a document with the fields:

- email
- createdAt
- displayName

Then create a Stripe account and copy the publishable API key. This will be entered into the .env file later.

Then create a .env file in the application root directory with the following variables (you can find this information in Firebase).

Follow this guide if you are uncertain: <a href="https://www.oreilly.com/ideas/implement-oauth0-in-15-minutes-with-firebase">https://www.oreilly.com/ideas/implement-oauth0-in-15-minutes-with-firebase</a>

<img src="https://d3ansictanv2wj.cloudfront.net/fig_5-edeb343cd558a6242490ed3d2d646b48.png"/>

```
REACT_APP_APIKEY=INSERT THIS FROM GOOGLE
REACT_APP_AUTH_DOMAIN=INSERT THIS FROM GOOGLE
REACT_APP_DATABASEURL=INSERT THIS FROM GOOGLE
REACT_APP_PROJECTID=INSERT THIS FROM GOOGLE
REACT_APP_STORAGEBUCKET=INSERT THIS FROM GOOGLE
REACT_APP_MESSAGINGSENDERID=INSERT THIS FROM GOOGLE
REACT_APP_APPID=INSERT THIS FROM GOOGLE
REACT_APP_MEASUREMENTID=INSERT THIS FROM GOOGLE
REACT_APP_STRIPEKEY=INSERT THIS FROM STRIPE
```

Start the application with either `npm start` or `yarn start`

## TODO

- Implement tests (see https://docs.cypress.io/guides/references/best-practices.html and https://www.robinwieruch.de/minimal-react-webpack-babel-setup)
- GraphQL with Apollo
- Use Lighthouse to find out how we can improve the application.
- Redux thunk
- Interesting read if planning to utilize Firebase in production: https://pamartinezandres.com/lessons-learnt-the-hard-way-using-firebase-realtime-database-c609b52b9afb
- Look into some sort of caching to avoid data being read more often than necessary?
- Consider replacing styled-components with https://github.com/styled-components/babel-plugin-styled-components for easier debugging
