import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';
import { UPDATE_TICK } from './actions';

const store = createStore(rootReducer)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

setInterval(() => {
    store.dispatch({ type: UPDATE_TICK, time: new Date() })
  }, 200)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

