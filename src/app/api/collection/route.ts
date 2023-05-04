import { DELETE } from "./../artwork/[id]/route";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authRouteHandler } from "../auth/[...nextauth]/route";

export async function POST(request: Request) {
  const session = await getServerSession(authRouteHandler);
  const userId = parseInt(session?.user.id);

  const res = await request.json();
  const new_collection = await prisma.collection.create({
    data: { ...res, userId: userId },
  });
  console.log(res);
  return NextResponse.json({ res });
}
