## Learning hooks

- [Original documentation is great](https://reactjs.org/docs/hooks-intro.html)
- [FAQS from original documentation](https://reactjs.org/docs/hooks-faq.html)

## What are hooks?

Hooks are functions that let you "hook into" React state and lifecycle methods. They let you use React without classes. React provides a few built-in hooks like useState. You can also create your own hooks to reuse stateful behaviour.

## Why were hooks introduced?

- They help you reuse stateful logic without changing your components hierachy, you can share them among many components or with others.
- You can split one component into smaller functions

## Types of hooks

### State hook

- `useState` returns a pair: the current state value and a function that allows you to update it, the only argument is the initial value (which is only used during the first render)
- You can use it more than one in a single component

* Uses the array destructuring syntax

### Effect hook

- If you perform data fetching, manually changing DOM from React, the operations are called "side effects", mainly because they can affect other components
- The `useEffect` hook allows you to perform side effects from a function component. It serves the same purpose as :
  _ `componentDidMount`
  _ `componentDidUpdate` \* `componentWillUnmount`
  in React classes, but joined together into a single API.

## Rules of hooks

- Only call hooks at the top level, do not put them inside loops, conditions or nested functions
- Only use them in React functional components, do not call them from regular javascript functions

## Building your own hooks

- You can create your own hooks using the `useState` and `useEffect` hooks.
- Each call to a hook has isolated state, you can use the same custom Hook twice in a component
- If a function name starts with `use` and calls other hooks, we say it is a custom Hook. The naming convention helps the linter plugin find bugs in the code
- You can write custom hooks that cover a wider range of use cases like form handling, timers etc

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
