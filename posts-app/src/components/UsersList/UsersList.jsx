import {useFetch} from "../../hooks/useFetch";

export default function UsersList() {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Cargando users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul>
        {users.slice(0,5).map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
          </li>
        ))}
    </ul>
  );
}