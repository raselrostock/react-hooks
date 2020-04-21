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


#### 2. Effect Hook: `useEffect()`

* Operations like data fetching, subscriptions, or manually changing the DOM from React components are called “side effects” or "effects",
  because they can affect other components and can’t be done during rendering.
  
* `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
  
* By default, React runs the effects after every render — including the first render. So `useEffect()` is called on initial render, when state changes ( component updates ) and when component unmounts.
   
* Just like with useState, you can use more than a single effect in a component

* ##### `Effects that don't require cleanup`: 
  > are the operations we perform after React has updated the DOM ( after render is called ).
  For example network request, user login. useEffect takes a function , that can be called 'effects' because it performs some operations.
  Some of these functions ( effects ), passed as a parameter, might require cleanup so they return a function, which we will discuss below.
  
```
    useEffect( () => {
      	console.warn( 'mounted/updated: Do Something( Fetch API, Add Event )' );      
    } );
```
* ##### `Effects that do require cleanup`: 
  > are the operations where we may want to set up a subscription to some external data source. So its important
  to cleanup to avoid memory leak. If your effect returns a function, React will run it when it is time to clean up on unmounts and re-render. Function return is optional
  and is required only if we require cleaning. Please note the this return function is called when the component unmounts and on every re-render.
  
```
    useEffect( () => {
      
      	console.warn( 'mounted/updated: Do Something( Fetch API, Add Event )' );
      
      	return () => console.warn( 'unmounted: Do Something( Unsuscribe, Remove Event )' );
    } );
``` 

* ##### `Skipping Effect for Perforance Optimization`:  
  You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:
  In below case if the value of 'count'( state variable ) does not change then the effect ( function passed as a parameter in useEffect ) will not run.
  If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument
  
```
    useEffect( () => {
        
    	console.warn( 'mounted/updated: Do Something( Fetch API, Add Event )' );
    
    	return () => console.warn( 'unmounted: Do Something( Unsuscribe, Remove Event )' );
    }, [count] );
```
   
* You can define multiple useEffect() in a component.
   Hooks let us split the code based on what it is doing rather than a lifecycle method name.
   React will apply every effect used by the component, in the order they were specified.