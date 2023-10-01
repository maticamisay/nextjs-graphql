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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3NTg5MTYxMzRhOWM3ZWQzZGJiYzgiLCJuYW1lIjoibWF0aSIsImlhdCI6MTY5NjE3Mjg3MiwiZXhwIjoxNjk2MTc2NDcyfQ.EIChRwp4ceVmy-TDixvvlpLVkcH29TvaK9bT6A7h8vE";

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
