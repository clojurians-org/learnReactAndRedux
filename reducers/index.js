import { combineReducers } from 'redux';

const helloReducer = (state={ name:'默认'}, action) => {
	switch (action.type){
		case 'input_name':
			return Object.assign({}, state, {name: action.name});
		default:
			return state;
	}
}

const mainReducer = combineReducers({
	helloReducer  
});

export default mainReducer;