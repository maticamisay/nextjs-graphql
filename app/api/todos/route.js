import { NextResponse } from "next/server";
import { getClient } from "@/lib/client";
import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "@/graphql/mutations/todos";
import { headers } from "next/headers";

export async function POST(request) {
  try {
    const newTodo = await request.json();
    const useHeader = headers(Request);
    const token = useHeader.get("authorization").split(" ")[1];
    const client = getClient();
    const res = await client.mutate({
      mutation: CREATE_TODO,
      variables: {
        title: newTodo.title,
        completed: newTodo.completed,
      },
      context: {
        token: token,
      },
    });
    const createTodo = res.data.createTodo;
    return NextResponse.json({
      todo: createTodo,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.networkError?.statusCode || 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const todo = await request.json();
    const useHeader = headers(Request);
    const token = useHeader.get("authorization").split(" ")[1];
    const client = getClient();
    const res = await client.mutate({
      mutation: UPDATE_TODO,
      variables: {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        userId: todo.userId,
      },
      context: {
        token: token,
      },
    });
    const updateTodo = res.data.updateTodo;
    return NextResponse.json({
      updateTodo,
    });
  } catch (error) {
    // console.log(error.networkError.result.errors.map((e) => e.message));
    console.log(error);
    return NextResponse.json(
      { error: error.message },
      { status: error.networkError?.statusCode || 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const todo = await request.json();
    const useHeader = headers(Request);
    const token = useHeader.get("authorization").split(" ")[1];
    const client = getClient();
    const res = await client.mutate({
      mutation: DELETE_TODO,
      variables: {
        id: todo.id,
      },
      context: {
        token: token,
      },
    });
    const deleteTodo = res.data.deleteTodo;
    return NextResponse.json({
      deleteTodo,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.networkError?.statusCode || 500 }
    );
  }
}
