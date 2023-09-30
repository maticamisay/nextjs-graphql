import { NextResponse } from "next/server";
import { getClient } from "@/lib/client";
import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "@/graphql/mutations/todos";

export async function GET() {
  console.log("GET request received");
  return NextResponse.json({
    hola: "hola",
  });
}

export async function POST(request) {
  try {
    const newTodo = await request.json();

    const client = getClient();
    const res = await client.mutate({
      mutation: CREATE_TODO,
      variables: {
        title: newTodo.title,
        completed: newTodo.completed,
        userId: newTodo.userId,
      },
    });
    const createTodo = res.data.createTodo;
    return NextResponse.json({
      todo: createTodo,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request) {
  try {
    const todo = await request.json();
    const client = getClient();
    const res = await client.mutate({
      mutation: UPDATE_TODO,
      variables: {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        userId: todo.userId,
      },
    });
    const updateTodo = res.data.updateTodo;
    return NextResponse.json({
      updateTodo,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(request) {
  try {
    const todo = await request.json();
    const client = getClient();
    const res = await client.mutate({
      mutation: DELETE_TODO,
      variables: {
        id: todo.id,
      },
    });
    const deleteTodo = res.data.deleteTodo;
    return NextResponse.json({
      deleteTodo,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
