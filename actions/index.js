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