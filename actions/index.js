let nextNum = 0;
export const hello = (text) => {
	return {
		type: 'HELLO',
		num: nextNum++,
		text
	}
}

export const asyncHello = (text) => {
	return dispatch => {
		return setTimeout(()=>{
			dispatch(hello(text));
		},1000);
	}
}