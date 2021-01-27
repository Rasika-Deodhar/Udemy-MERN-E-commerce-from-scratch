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
- __rafce (React Arrow Function Component Export)__ is a short-cut by - `ES7 React/Redux/GraphQL/React-Native snippets` VSC extension
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
Files are exported as - ```export default products```

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
