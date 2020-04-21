# React Hooks Boilerplate

:fire: This is a boilerplate to build React Applications with React Hooks.

## Installation

1. Clone this repo in `git clone https://github.com/raselrostock/react-hooks`

2. `cd react-hooks`

3. Run `npm install`

## Commands

- `dev` Runs webpack dev server for development
- `prod` Runs webpack in production mode

## What are React Hooks?
> * A Hook is a special function that lets you “hook into” React state and lifecycle features.
> * Hooks are a new addition in React 16.8, which allow you to use state and other React features without writing a class.
> * For example, useState is a Hook that lets you add React state to function components. Hooks dont work inside classes

## Difference between State of a Class Vs Hook?

* Unlike this.state, the state in hooks doesn’t have to be an object. We can keep it a number, string or an array.
* You can use the State Hook more than once in a single components

```
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

## Rules of Hooks

* Hooks should be called at the top level. Don’t call Hooks inside loops, conditions, or nested functions
* Hooks should be called from React function components. Don’t call Hooks from regular JavaScript functions
* There are linter plugins for check this rule [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## When would I use a Hook?
 * If you write a function component and realize you need to add some state to it, previously you had to convert it to a class 


## Types of Hooks?

#### 1. State Hook: `useState()`
	* `useState` takes initialState and returns a pair ( an array with two items ) : the current state value and a function that lets you update it.

	'''
	const [ count, setCount ] = useState( initialState );
	'''

	* Calling `useState()` like above, declares a state variable (count).The first time our component renders, its value will be equal to initialState.
    The next time our component renders its value will be equal to current State ( which will be same as initial state 
    unless the setCount() updates its value )
    
    * When `setCount( 1 )` is called with a new value, React re-renders your component, passing new state (count) value to it.  
   
    * `useState` is similar to this.setState in a class, except it doesn’t merge the old and new state together
