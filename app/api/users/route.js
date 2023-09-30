import { NextResponse } from "next/server";
import { getClient } from "@/lib/client";
import { CREATE_USER, DELETE_USER } from "@/graphql/mutations/users";

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

export async function DELETE(request) {
  try {
    const user = await request.json();
    const client = getClient();
    const res = await client.mutate({
      mutation: DELETE_USER,
      variables: {
        id: user.id,
      },
    });
    const deleteUser = res.data.deleteUser;
    return NextResponse.json({
      deleteUser,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
