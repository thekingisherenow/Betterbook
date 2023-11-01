## Starting the project

We are using `yarn` as the dependency manager for this project.

Run `yarn dev` in your terminal to start the project which will run our application on port `3000`.

If something is already running on `3000`, do `npx cross-port-killer 3000` to kill the existing process.

## Component creation flow

Let's put all the common components such as `buttons`, `inputs` under `./src/components`

Let's put all the page/module specific components under `./src/modules`

## Technologies used

#### 1. Tailwind

We are using [tailwind](https://tailwindcss.com/) for majority of the css work.

#### 2. Redux/Redux

We are using [Redux Toolkit](https://redux-toolkit.js.org/) for managing global state in our application.

We have all the redux code under `./src/core/store`

#### 3. TypeScript

TypeScript for type safety

#### 4. Headless UI

[Headless UI](https://headlessui.com/) for pre-build common components like `dropdown`, `toggle` etc.
