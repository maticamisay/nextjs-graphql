import Image from "next/image";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import TodoForm from "@/components/FormTodo";
import TodoList from "@/components/TodoList";

const userQuery = gql`
  query {
    todos {
      title
      completed
      userId {
        name
      }
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query: userQuery });

  return (
    <main>
      <TodoForm />
      <TodoList todos={data.todos} />
    </main>
  );
}
