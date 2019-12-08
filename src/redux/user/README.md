# Redux actions (user.actions.js)

Actions are payloads of information that send data from your application to your store (state).
They are the only source of information for the store (state).
You send them to the store (state) using store.dispatch().

Action creators are exactly that, functions that create actions.
It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term.
In Redux, action creators simply return an action:

function addTodo(text) {
return {
type: ADD_TODO,
text
}
}

https://redux.js.org/basics/actions#actions

# Redux Reducers (user.reducer.js)

They specify how the application's state changes in response to actions sent to the store.
Remember that actions only describe what happened, but don't describe how the application's state changes.

In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code.

https://redux.js.org/basics/reducers

# Selectors (user.selectors.js)

Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater.

Selectors can compute derived data, allowing Redux to store the minimal possible state.
Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
Selectors are composable. They can be used as input to other selectors.
