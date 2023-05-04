import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authRouteHandler } from "../auth/[...nextauth]/route";

import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: Request) {
  const session = await getServerSession(authRouteHandler);
  const userId = parseInt(session?.user.id);

  const res = await request.json();
  const new_artwork = await prisma.artwork.create({
    data: { ...res, userId: userId },
  });
  console.log(res);
  return NextResponse.json({ res });
}
