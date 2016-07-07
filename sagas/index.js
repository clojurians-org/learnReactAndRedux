import * as actions from '../actions';
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga/lib/internal/utils'
import fetch from 'isomorphic-fetch';

export function* asyncHello(obj){
  yield call(delay, 1000);
  yield put({type:'input_name',name:obj.name});
}

export function* watchAsyncHello() {
  yield* takeEvery('async_hello', asyncHello)
}

export function* fetchPosts(){
  const res = yield call(fetch, `http://localhost:3000/app.js`);
  const data = yield res;
  yield put({ type: 'receive_posts', jsonData:[{title:'1111'},{title:'2222'}] });
}

export function* watchFetchPosts() {
  yield* takeEvery('fetch_posts', fetchPosts)
}

export function* mySaga() {
  yield [
    watchAsyncHello(),
    watchFetchPosts()
  ]
}