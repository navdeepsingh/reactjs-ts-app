## Tasks

### 1. Transforming the data

Open `./src/api/github-events.api.ts` and transform the result into required data structure.

### 2. Submitting data with a form

Open `./src/app.tsx` and add a form with a `user` and a `repo` text field, and a submit button.

Modify the code, so that the events returned by `./src/api/github-events.api.ts` reflects what has been submitted through the form, i.e. `microsoft` 
should be replaced by the value of the `user` field, and `TypeScript` should be replaced by the value of the `repo` field.

### 3. Rendering a nice user experience

Open the comp at https://www.sketch.com/s/f40d714d-b01d-4bdd-8099-e89386416560 and start changing the code in `./src/app.tsx` to be as close as possible to the comp.


# Available Scripts

In the project directory, you can run:

## `npm install`

Installs the project dependencies. A prerequisite for tasks below.

## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.