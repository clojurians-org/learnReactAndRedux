let nextNum = 0;
export const hello = (text) => {
	return {
		type: 'HELLO',
		num: nextNum++,
		text
	}
}