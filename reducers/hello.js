const hello = (state={}, action) => {
	switch (action.type) {
		case 'HELLO':
			return {
				num: action.num,
				text: action.text
			};
		default:
			return state;
	}
}

export default hello;