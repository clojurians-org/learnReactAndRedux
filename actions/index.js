import fetch from 'isomorphic-fetch';

export const commonHello = (name) => {
	return {
		type:'input_name',
		name
	}
}

export const asyncHello = (name) => {
  return dispatch => {
    return setTimeout(()=>{
      dispatch(commonHello(name));
    }, 1000);
  }
}

const receivePosts = (jsonData) => {
	return {
		type:'receive_posts',
		jsonData
	}
}

export const fetchPosts = () => {
	return dispatch => {
		return fetch(`http://www.reddit.com/r/reactjs.json`)
		.then(response => response.json())
		.then(json => dispatch(receivePosts(json)))
	}
}
