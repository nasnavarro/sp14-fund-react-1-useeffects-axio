import PostsList from "./components/PostsList/PostsList";
import UsersList from "./components/UsersList/UsersList";
import Form from "./components/Form/Form";
import FormRef from "./components/FormRef/FormRef";

export default function App() {

  return (
    <div>
      <h1>Formulario con useState</h1>
      <Form />
      <h1>Formulario con useRef</h1>
      <FormRef />
      <h1>Posts</h1>
      <PostsList />
      <h1>Users</h1>
      <UsersList />
    </div>
  );
}
