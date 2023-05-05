import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function PATCH(request: Request) {
  const body = await request.json();
  const artworkId = body.artworkId;
  const collectionId = body.collectionId;

  const artwork = await prisma.artwork.update({
    where: {
      id: artworkId,
    },
    data: {
      collectionId: collectionId,
    },
  });
  return NextResponse.json({ artwork });
}
