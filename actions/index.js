export const commonHello = (name) => {
	return {
		type:'input_name',
		name
	}
}

export const receivePosts = (jsonData) => {
  console.log('receivePosts')
  return {
    type:'receive_posts',
    jsonData
  }
}
