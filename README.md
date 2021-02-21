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

### `Section 6: Adding The Shopping Cart`

- Adding `Quantity` component
- Adding `Cart` functionality using redux.
- _Steps_ :-

  1. `Capture qty in product screen and push it via URL on Cart Screen component. The URL can be defined in Route of App.js`. _Note-_ Qty initial state is set as 1 in Product screen

  2. `Add cart screen -> cart constants -> cart reducer -> add in store -> cart actions`

- `reduce` -> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  _Used while changing the cart items - helps in re-calculating the quantity, no. of items selected and total-price._

### `Section 7: Back End User Authentication`

- Adding Product Controllers, calling controllers from routers
- Adding User Authentication End-point (using `bcrypt` from checking correct password)
- `JWT` - Json Web Tokens - Helps in Authorization within application.
  We can send a Bearer Token via Header for each end-point to know if the user is authorized to access it. `jwt.io` helps in generation of token based on a hashing algorithm

- Created User route, user controller for user end-points
- utils/generateToken.js is created to generate JWT signature token for provided user id.

- create auth middleware and use it in user routes

- tokens can be saved in postman using tests from login api -

```
pm.environment.set("TOKEN", pm.response.json().token)
```

- Add `{{TOKEN}}` in the auth of the auth end-point which you want to check

- Registering a new user - register user endpoint - controller
- generate a token while registering a user
- `salt` - by definition - The salt is random data very often used in cryptography as additional input to a hash function. Doing encryption and decryption of a String with a salt implies that you should: Read an initial String. Generate random bytes to be placed in the salt.
- salt can be generated using `bcrypt.genSalt()`.

  A cryptographic salt is made up of random bits added to each password instance before its hashing. Salts create unique passwords even in the instance of two users choosing the same passwords. Salts help us mitigate rainbow table attacks by forcing attackers to re-compute them using the salts.

- `schema.pre()` - function used before saving the record

### `Section 8: Front End User Authentication & Profile`

- Create user constant, reducer, action

#### Note: The store is returning _local storage value_ in case of some variables which is causing error saying -

```
uncaught syntaxerror unexpected token U JSON
```

- #### To resolve this, set the value of those variables as empty array. Comment mentioned in store.js

- `Form Container Component` loads form in the provided format.

- Displaying User on Navbar
- User Logout functionality

- User register -> reducer, action and screen

- Update User functionality -> PUT API -> changes in user controller and user routes

- Adding Profile screen -> user constants added -> user details reducer -> store -> user action -> profile screen ui component -> adding route in app.js

```
Note: Profile Update is Not working if followed the course, produces error.
Commented that code in ProfileScreen.js and updated it according to my work of my browser and machine
```

### `Section 9: Checkout Process - Part 1`

In below screens - similar processes are followed ->
Screen -> Reducer -> Action -> Constants -> Store declaration

- Checkout steps Screen
- Payment Mode Screen

### `Section 10: Checkout Process - Part 2`

- Place Order Screen
- Order Create Screen

- Added Order Controller - GET order
- Display Order Screen (UI and Backend changes)

- Setting Payment using Paypal api -> available on paypal dev (https://developer.paypal.com/developer/applications/) -> `Create a Personal and Business dummy account from sandbox > accounts. From Dashboard > My apps and cred, create an app and set the sandbox account to it.`
- Added Paypal script in Order Screen page using JS async function
- install react paypal button on UI - It will provide a paypal button
- `After clicking on the button Login to Paypal using sandbox credentials and your dummy payment will be successfully made.`

- Add orders from user on user profile under My Orders (Order controller and Redux of Order component to be added and using those in Profile Screen)

- Added CART RESET alongwith USER_RESET and ORDER_LIST_RESET after the user logs out.

### `Section 11: Admin Screens - Part 1`

- Adding get all users api, only for admin user. Setting `admin` function in `authMiddleware` and applying it in `userRoutes`, so that if user is admin, only then the api can be accessed.

- Admin screen access security by reseting user list state when admin logs out and page redirection when non-admin tries to access the api.

- Writing Edit and Delete User end-points for Admin Screen.
