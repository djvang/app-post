export const loadPosts = async ( ) => {
  const url = `https://jsonplaceholder.typicode.com/posts/1?_embed=comments&_expand=user`
  
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
};