## React Hooks
Hooks were added to React in version 16.8.Hooks are some javascript functions given by react to use some powerful features of react like useSate used to define the states for the functional component.We have many types of inbuilt hooks given by react.
1-State Hooks 
2-Context Hooks
3-Ref Hooks
4-Effect Hooks
5-Performance Hooks

## Difference between Named Export , Default export and * as Export
ES6 came with the concept of modules we can write some piece of code in a JS file and we can use that in some other files by using import and export keyword.
Fisrt we have to export from the file where it written and than we need to import in the file where we want to use that code.

Type of exports --
### Named Export-- 
Named exports allow you to share multiple modules from a file.
ex-
````
//exporting named export from a file
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export function sayHello(user) {
  alert(`Hello, ${user}!`);
}
//importing named export in a file
 import {sayHi, sayHello} from 'user.js'
````
while importing named export we need to desturucture that exports by names  as we have multiple export from same file.

### Default Export
We can only use one default export in a JavaScript file.
ex-
````
//exporting default export from a file
export default function getAllUser():

//importing named export in a file
import getAllUser from "getuser.js";
````
while importing deafult export we can directly import that exports as we have only one import.

### * Import
if we have many export from a file and in some we are going to use mostly all of them than it is a just waste of time to import all of them one by one in this case we can import all of them in one shot

ex-
````
//importing all exports from a file
import * as User from 'user.js'
//accessing the imports 
User.name
User.sayHi
````

## useState hooks-
useState is a hook that sets a local state to our functional component.It takes only one argument the initial value that you want to give to your state and it returns the a array of two values.1st one is that state with initial value and 2nd is the function that is needed to change that state.

ex--
``````
//creating a state
const [stat ,setStat]=useState("");
//setting new state
setState("new State");
``````

whenever we uses the setStat function react detects changes in stat and again rerender that component with new state.











