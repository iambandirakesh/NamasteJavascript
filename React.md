## 1. What is React?

- React is a JavaScript library for building user interfaces.

## 2. React Hooks

- Hooks were added to React in version 16.8. They let you use state and other React features without writing a class.
- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
- React Hooks are functions that let you “hook into” React state and lifecycle features from function components.

### Hook Rules:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional.

### React Hooks:

- `useState()`
- `useEffect()`
- `useContext()`
- `useReducer()`
- `useRef()`
- `useCallback()`
- `useMemo()`

#### 1. useState()

- The React `useState` Hook allows us to track state in a function component.
- `useState()` is a Hook that allows you to have state variables in functional components.
- To use the `useState` Hook, we first need to import it into our component.
- We initialize our state by calling `useState` in our function component.
- `useState` accepts an initial state and returns two values:
  - The current state.
  - A function that updates the state.

**Example:**

```javascript
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

#### 2. useEffect()

- The React `useEffect` Hook allows you to perform side effects in your components.
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- `useEffect` accepts two arguments. The second argument is optional.
  - The first argument is a function that executes based on the dependency array.
  - The second argument is an array of dependencies.

**Example:**

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
const [count, setCount] = useState(0);
useEffect(() => {
document.title = You clicked ${count} times;
}, [count]);

return (

<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>
Click me
</button>
</div>
);
}
```

#### 3. useContext()

- The React `useContext` Hook allows you to access the context in a functional component.
- Context is a way to pass data through the component tree without having to pass props down manually at every level.
- `useContext` solves the problem of prop drilling.

**Example:**

```javascript
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
const [user, setUser] = useState("Jesse Hall");

return (
<UserContext.Provider value={user}>

<h1>{Hello ${user}!}</h1>
<Component2 />
</UserContext.Provider>
);
}

function Component2() {
return (
<>

<h1>Component 2</h1>
<Component5 />
</>
);
}

function Component5() {
const user = useContext(UserContext);

return (
<>

<h1>Component 5</h1>
<h2>{Hello ${user} again!}</h2>
</>
);
}
```

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);

#### 4. useReducer()

#### 5. useRef()

- The React `useRef` Hook allows you to persist values between renders.
- It can be used to store a mutable value that does not cause a re-render when updated.
- It can be used to access a DOM element directly.

**Example:**

```javascript
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

#### 6. useMemo()

- The React `useMemo` Hook returns a memoized value.
- The `useMemo` Hook only runs when one of its dependencies updates.
- `useMemo` is used for performance optimization by avoiding unnecessary recalculation of expensive operations.

**Example:**

```javascript
import React, { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
const result = useMemo(() => {
return a \* b;
}, [a, b]);

return <div>Result: {result}</div>;
}
```

#### 7. useCallback()

- The React `useCallback` Hook returns a memoized callback function.
- It is used to optimize performance by avoiding unnecessary re-rendering of components.

#### 8. Custom Hook

- By using custom hooks, we can create our custom hooks like `useState`, `useEffect`, making our component reusable.

**Example: Creating Custom Hook**

```javascript
import { useState } from "react";

// Custom hook for counter functionality
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue); // State to keep track of count
  // Function to increment count
  const increment = () => setCount((prevState) => prevState + 1);
  // Returns count and increment function
  return [count, increment];
}
```

**Using the Custom Hook:**

```javascript
import React from "react";
import useCounter from "./useCounter";

// Component using the useCounter Hook
function CounterComponent() {
  const [count, increment] = useCounter(); // Utilizing useCounter

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## 3. Redux

- Redux is a predictable state management library for JavaScript apps, commonly used with React but can be used with any other JavaScript framework or library.
- It helps to manage the state of an application in a consistent way, making it easier to develop, test, and debug.

### How Redux Works:

1. **Actions:**

   - Actions are plain JavaScript objects that describe a change or an event that has occurred in the application.
   - An action typically has a type property that indicates the type of action that has occurred.
   - The action object can also have a payload property that holds the data associated with the action.
   - Actions are sent to the store using the `store.dispatch()` method.

   **Example:**

   ```javascript
   const incrementAction = { type: "INCREMENT" };
   const addTodoAction = { type: "ADD_TODO", payload: "Learn Redux" };
   ```

2. **Reducers:**

   - A reducer is a function that accepts two arguments: the current state and an action, and returns a new state.
   - The reducer will decide how the application state changes in response to the action.

   **Example:**

   ```javascript
   const initialState = { count: 0 };

   function counterReducer(state = initialState, action) {
     switch (action.type) {
       case "INCREMENT":
         return { count: state.count + 1 };
       case "DECREMENT":
         return { count: state.count - 1 };
       default:
         return state;
     }
   }
   ```

3. **Store:**

   - The store is the object that holds the state of an application. It is created using the `createStore` function from Redux.
   - The store provides methods to access the state, dispatch actions, and subscribe to changes.

   **Example:**

   ```javascript
   import { createStore } from "redux";
   const store = createStore(counterReducer);
   console.log(store.getState()); // { count: 0 }
   ```

4. **Dispatching Actions:**

   - The store’s dispatch method is used to send actions to the reducer.

   **Example:**

   ```javascript
   store.dispatch({ type: "INCREMENT" });
   console.log(store.getState()); // { count: 1 }
   ```