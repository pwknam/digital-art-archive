import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  const user = await prisma.user.findFirst();
  const new_collection = await prisma.collection.create({
    data: { ...res, userId: user?.id },
  });
  console.log(res);
  return NextResponse.json({ res });
}
