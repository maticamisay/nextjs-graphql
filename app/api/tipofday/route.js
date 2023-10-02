import { CREATE_TIP_OF_DAY } from "@/graphql/mutations/tipofday";
import { LOGIN_USER } from "@/graphql/mutations/users";
import { getClient } from "@/lib/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newTip = await request.json();
    const useHeader = headers(Request);
    const token = useHeader.get("authorization").split(" ")[1];
    const client = getClient();
    const res = await client.mutate({
      mutation: CREATE_TIP_OF_DAY,
      variables: {
        title: newTip.title,
        description: newTip.description,
      },
      context: {
        token: token,
      },
    });
    const tipCreated = res.data.createTipOfDay;
    return NextResponse.json({
      message: "Tip creado correctamente",
      tipCreated,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.networkError?.statusCode || 500 }
    );
  }
}
