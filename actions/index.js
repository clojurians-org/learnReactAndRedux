export const commonHello = (name) => ({
  type:'input_name',
  name
});
export const receivePosts = (jsonData) => ({
    type:'receive_posts',
    jsonData
});