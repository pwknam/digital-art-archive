import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

interface ArtworkIDRouteParams {
  params: { id: string };
}

export const PUT = async (request: Request, context: ArtworkIDRouteParams) => {
  const body = await request.json();

  const id = Number(context.params.id);

  const artwork = await prisma.artwork.update({
    where: {
      id: id,
    },
    data: body,
  });

  return NextResponse.json({ artwork });
};