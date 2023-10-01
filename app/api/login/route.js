import { LOGIN_USER } from "@/graphql/mutations/users";
import { getClient } from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const loginData = await request.json();
    const client = getClient();
    const res = await client.mutate({
      mutation: LOGIN_USER,
      variables: {
        name: loginData.name,
        password: loginData.password,
      },
    });
    const loginToken = res.data.login;
    return NextResponse.json({
      token: loginToken.accessToken,
      name: loginToken.name,
      role: loginToken.role,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
