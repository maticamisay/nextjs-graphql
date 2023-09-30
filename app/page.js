import { getClient } from "@/lib/client";
import TodoForm from "@/components/todos/FormTodo";
import TodoList from "@/components/todos/TodoList";
import { GET_TODOS } from "@/graphql/queries/todos";

export default async function Home() {
  const { data } = await getClient().query({ query: GET_TODOS });

  return (
    <>
      <TodoForm users={data.users} />
      <TodoList todos={data.todos} />
    </>
  );
}
