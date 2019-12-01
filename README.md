<img src="https://circleci.com/gh/w3bdesign/react-ecommerce/tree/master.svg?style=svg"> <img src="https://api.codeclimate.com/v1/badges/ec3dd668ce623ddb263d/maintainability" />
[![Netlify Status](https://api.netlify.com/api/v1/badges/fa283d61-4b14-45a2-a1c4-629cd351328b/deploy-status)](https://app.netlify.com/sites/react-c776ed/deploys)

# React Ecommerce

This is currently a work in progress.
Will be updated regularly.

## Features

- Google authentication
- Registration and login with email/password
- Redux
- Shopping cart

## Setup

Setup a Firebase account with Google authentication and local authentication enabled, then add a Firebase database with 
a collection called <b>users</b> and add a document with the fields:
- email 
- createdAt 
- displayName

Then create a .env file with the following variables:
```
REACT_APP_APIKEY=INSERT THIS FROM GOOGLE
REACT_APP_AUTH_DOMAIN=INSERT THIS FROM GOOGLE
REACT_APP_DATABASEURL=INSERT THIS FROM GOOGLE
REACT_APP_PROJECTID=INSERT THIS FROM GOOGLE
REACT_APP_STORAGEBUCKET=INSERT THIS FROM GOOGLE
REACT_APP_MESSAGINGSENDERID=INSERT THIS FROM GOOGLE
REACT_APP_APPID=INSERT THIS FROM GOOGLE
REACT_APP_MEASUREMENTID=INSERT THIS FROM GOOGLE
```

## TODO

- Implement tests (see https://docs.cypress.io/guides/references/best-practices.html and https://www.robinwieruch.de/minimal-react-webpack-babel-setup)
