import test from 'ava';
import {helloReducer, jsonReducer } from './reducers';

test('helloReducer[default]', t=>{
	t.deepEqual(helloReducer({name:'aaa'},{type:'unknow'}),{name:'aaa'});
});

test('helloReducer[input_name]', t=>{
	t.deepEqual(helloReducer({name:'aaa'},{type:'input_name', name:'bbb'}),{name:'bbb'});
});

test('jsonReducer[default]', t=>{
	t.deepEqual(jsonReducer({jsonData:'aaa'},{type:'unknow'}),{jsonData:'aaa'});
});

test('jsonReducer[receive_posts]', t=>{
	t.deepEqual(jsonReducer({jsonData:'aaa'},{type:'receive_posts', jsonData:{data:{children:'bbb'}}}),{jsonData:'bbb'});
});