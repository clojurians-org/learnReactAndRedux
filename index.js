import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import helloApp from './reducers';
import App from './components/App';

// configureStore
const loggerMiddleware = createLogger();
const configureStore = (initialState) => {
	return createStore(
		helloApp,
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
);