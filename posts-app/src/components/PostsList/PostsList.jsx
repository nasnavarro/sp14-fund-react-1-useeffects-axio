import {useFetch} from "../../hooks/useFetch";

export default function PostsList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul>
        {posts.slice(0,5).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
    </ul>
  );
}