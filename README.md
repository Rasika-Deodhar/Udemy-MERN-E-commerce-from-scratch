# Udemy Course - MERN E-commerce from Scratch

## _By - Brad Traversy_

Learnings from the course on regular basis.

### `Section 1: Introduction`

- Covers what will happen in the course
- Demo of the final application
- Extensions used in VSC editor
- Provided file for resources

### `Section 2: Starting the Front End (React)`

- Initial setup of the front-end of the application
- Git repository setup
- **rafce (React Arrow Function Component Export)** is a short-cut by - `ES7 React/Redux/GraphQL/React-Native snippets` VSC extension
- UI Libraries -`React Bootstrap`, `Material UI`
- impt - shortcut to import PropTypes
- Setting default values for props in a component (Ratings component)
- Creating Components - Header, Footer, Products, Ratings
- React Dev Tools Extension - Components and Profiles checking via browser
- React Router - helps creating routes for different pages
- Image fluid property - helps keeping image inside its container
- Link - helps to create link for SPA, by changing pages browser is not refreshed
- Listgroup - collection of different props of a component together
- Listgroup flush property - no border
- Row and Col - for grids
- Card - for card type display

### `Section 3: Serving and Fetching Data from Express`

- Setting up the backend
- Placing products file in backend folder
- Writing apis to publish products (all and id wise)
- `__axios__` -> dependency to make http request from backend (installed in frontend)
- `__useState__` -> use state in functional component -> Be careful with the value inside () -> [] for array and {} for object
- `__useEffect__` -> effective as soon as the components is loaded on screen. 2nd variable is dependency variable- if this changes then useEffect is fired up
- `__nodemon__` -> to keep an eye on Node server
- `__concurrently__` -> used to run server side and client side concurrenly. Can place in scripts part of package.json
- `__dotenv__` -> for environment setup (dev, user, QA etc.)
- `__ES modules in Node.js__` -> set "type": "module" in package.json of the main project. This will allow importing of files/libraries in ES style.

Example -

```
const express = require('express')
```

will become

```
import express from 'express'
```

Files are exported as - `export default products`

AND

Files will be imported with extension -

```
import products from './data/products.js'
```

### `Section 4: Getting Started with MongoDB`

- Creating a cluster on MongoDB Atlas cloud
- Download MongoDB so that you can access the url locally too
- Set up Database access user and give network access from anywhere
- In Clusters -> add a database and collection
- Clusters > Connect > MongoDB compass > copy given api string > paste in compass > set password and db name in the end > connect
- Clusters > Connect > Connect your application > copy string > paste in .env as variable MONGO_URI with updated dbname and password
- `mongoose` -> Object Modelling for NodeJS. Allows creating models and schema. Install and put db connection script in backend code.
- `colors` -> vscode extension for changing colors of console log messages. Install and use on js scripts. Just write .colorname.characteristics(underline/bold) etc.
- creating models for different components - User, Product, Order
- creating sample data by generating data seeder script
- `bcryptjs` -> hiding passwords

- seeder.js -> script to create and delete the data in the given Database. Parameters need to be provided while running the script which can be defined in package.json (data:import and data:destroy) which would help to determine which method in the script has to be called in.
- adding route folder and adding a seperate router file for each model. Each model will have a different route in distinguished file which will be set in server script. -`express-async-handler` -> middleware for handling exceptions of async express routes and pass them to express handlers (from npm website)
- run the server and check for data on api.
- Intro to `Postman` and how can we call apis from there is explained (already know that)
- `Custom Error Handler` - Changing default error message. Can throw via api condition. FOr other errors we can create an error middleware handling different error conditions.

### `Section 5: Implementing Redux For State Management`

- Redux Pattern -> Introduction -> Reducer, Components, Actions and Server
- `Redux DevTools` -> extension on Chrome for devs to compile and debug
- `redux` - state manager, `react-redux` to use with react
- `redux-thunk` - middleware
- `redux-devtools-extension` - to make redux work

- `store` - By definition - A store is an object that holds the application's state tree There should only be a single store in a Redux app, as the composition happens on the reducer level.

- `state` can be seen in `redux` chrome extension. We have to set reducers in the front end to be able to see the state at each time. **Note** : The states are saved as constant in a separate constant file.
- `thunk` - used to add function within a function
- `action` - will make the initial calls and dispatch the output to reducers defined. We have to fire-off the action to get the default results as required.
- The action function is triggered from the screen code, `useEffect` and `useSelector` are used to `trigger action function to dispatch data` and `pick a particular state from redux store(defined in action function)` respectively.

- For adding _Reducer_ and _Actions_ to other screens follow these steps to write code:
  `Constants -> Reducer -> Store -> Action -> Screen`
