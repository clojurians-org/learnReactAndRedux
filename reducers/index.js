import {combineReducers} from 'redux';

export const helloReducer = (state = {name: '默认'}, action) => {
  switch (action.type) {
    case 'input_name':
      return Object.assign({}, state, {name: action.name});
    default:
      return state;
  }
}

export const jsonReducer = (state = {}, action) => {
  switch (action.type) {
    case 'receive_posts':
      return Object.assign({}, state, {jsonData: action.jsonData})
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  helloReducer,
  jsonReducer
});

export default mainReducer;