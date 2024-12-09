export const fetchSinglePost = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) return null;

  const post = await response.json();
  return post;
};
