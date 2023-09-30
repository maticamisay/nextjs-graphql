import { NextResponse } from "next/server";
import { getClient } from "@/lib/client";
import { CREATE_USER } from "@/graphql/mutations/users";

export async function POST(request) {
  try {
    const newUser = await request.json();

    const client = getClient();
    const res = await client.mutate({
      mutation: CREATE_USER,
      variables: {
        name: newUser.name,
      },
    });
    const createUser = res.data.createUser;
    return NextResponse.json({
      user: createUser,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

// export async function DELETE(request) {
//   try {
//     const todo = await request.json();
//     const client = getClient();
//     const res = await client.mutate({
//       mutation: DELETE_TODO,
//       variables: {
//         id: todo.id,
//       },
//     });
//     const deleteTodo = res.data.deleteTodo;
//     return NextResponse.json({
//       deleteTodo,
//     });
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// }
