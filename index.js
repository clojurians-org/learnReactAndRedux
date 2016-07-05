import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import mainReducer from './reducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();
const configureStore = (initialState) => {
  return createStore(
    mainReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)