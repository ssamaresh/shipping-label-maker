WIZARD

This application is a reusable Wizard that takes in components in the form of an array and renders a form wizard in a series of steps.
The heart of the app is a “Wizard” component whose primary responsibility is to receive a series of steps from its parent and sequencing through them. The steps will instruct the wizard to move forward or backwards, or end the wizard. The wizard should not know anything about the business domain. It simply receives a domain object called wizardContext from the parent and passes it on to the steps. Steps are free to modify the wizardContext as they collect information from the user.
____________________________________________________________________________________________________________

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In the project directory, you can run:

## `npm install` to install node_modules
### `npm start` to run the project

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
