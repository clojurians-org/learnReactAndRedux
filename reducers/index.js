import {combineReducers} from 'redux';
import hello from './hello';

const helloApp = combineReducers({
	hello
});

export default helloApp;