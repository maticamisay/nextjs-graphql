import { REVALIDATE_TOKEN } from "@/graphql/mutations/users";
import { getClient } from "@/lib/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const useHeader = headers(Request);
    const token = useHeader.get("authorization").split(" ")[1];
    const client = getClient();
    const res = await client.mutate({
      mutation: REVALIDATE_TOKEN,
      context: {
        token: token,
      },
    });
    const loginToken = res.data.revalidateToken;
    return NextResponse.json({
      token: loginToken.accessToken,
      name: loginToken.name,
      role: loginToken.role,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.networkError?.statusCode || 500 }
    );
  }
}
