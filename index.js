import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import mainReducer from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { mySaga } from './sagas';

/* 自制一个中间件 */
const heher = store => next => action => {
  console.log('hehe');
  let result = next(action);
  return result;
}

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const configureStore = (initialState) => {
  return createStore(
    mainReducer,
    initialState,
    applyMiddleware(
      heher,
      sagaMiddleware,
      loggerMiddleware
    )
  )
}
const store = configureStore();
sagaMiddleware.run(mySaga);

/* Router的component，就不写过去了，没几行 */
const Users = () => {
  return (
    <div className='container'>
      <h1>Users</h1>
      <Link to={'/users/111'}>1号用户</Link>
    </div>
  )
}
const User = ({params:{userid}}) => {
  return (
    <div className='container'>
      <h1>userid : {userid}</h1>
    </div>
  )
}
const NoMatch = () => {
  return (
    <div className='container'>
      <h1>没有这个页面</h1>
    </div>
  )
}

const onEnterFn = (nextState, replace, next) => {
  console.log(`权限判断，如登录状态判断，${nextState}`);
  // replace('/'); 
  next();
}

render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" onEnter={onEnterFn}>
          <IndexRoute component={App}/>
          <Route path="app" component={App}></Route>
          <Route path="users">
            <IndexRoute component={Users}/>
            <Route path=":userid" component={User} />
          </Route>
          <Route path="*" component={NoMatch}></Route>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)