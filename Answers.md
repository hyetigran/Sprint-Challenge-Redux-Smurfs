1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .filter and .concat
We use the spread operator like this; ...state

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-Store contains the state for the entire application.
-Actions contain information adn action type  and some data associated with that action.
-Reducer is the only place in the app where you can alter state. You do so by passing actions as arguments.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state should be used if the data in that component does not need to be accessed by any other component. Application state should be used if state/props need to be accessed in two branches of seperate tree.

1.  What is middleware?
Middleware in redux intercepts actions before it flows to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that allows for async actions.

1.  Which `react-redux` method links up our `components` with our `redux store`? 
{ connect }
