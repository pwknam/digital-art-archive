import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { useEffect } from "react";

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
    data: {
      title: body.title != false ? body.title : undefined,
      description: body.description != false ? body.description : undefined,
      image: body.image != false ? body.image : undefined,
      type: body.type != false ? body.type : undefined,
      medium: body.medium != false ? body.medium : undefined,
      size: body.size != false ? body.size : undefined,
      pieces: body.pieces != false ? body.pieces : undefined,
      price: body.price != false ? body.price : undefined,
      createdAt: body.createdAt != false ? body.createdAt : undefined,
    },
  });

  return NextResponse.json({ artwork });
};

export const DELETE = async (
  request: Request,
  context: ArtworkIDRouteParams
) => {
  const id = Number(context.params.id);
  const deleteArtwork = await prisma.artwork.delete({
    where: {
      id: id,
    },
  });
};
