import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { User, getServerSession } from "next-auth";
import { authRouteHandler } from "../auth/[...nextauth]/route";

import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export async function POST(request: Request) {
  const session = await getServerSession(authRouteHandler);
  const user = session?.user as User | undefined;
  const userId = user?.id ? parseInt(user.id) : null;
  const res = await request.json();

  const artwork = artworkValidator.safeParse(res);
  if (!artwork.success) {
    return NextResponse.json(
      { errors: artwork.error.format() },
      { status: 422 }
    );
  }

  console.log(artwork);

  const new_artwork = await prisma.artwork.create({
    data: { ...res, userId: userId },
  });
  console.log(res);
  return NextResponse.json({ res });
}

const artworkValidator = z.object({
  title: z.string().min(1, { message: "Must be 1 or more characters long" }),
  description: z
    .string()
    .min(1, { message: "Must be 1 or more characters long" }),
  image: z.string().url({ message: "Must be a valid URL" }),
  type: z.string().min(1, { message: "Must be 1 or more characters long" }),
  medium: z.string().min(1, { message: "Must be 1 or more characters long" }),
  size: z.string().min(1, { message: "Must be 1 or more characters long" }),
  pieces: z.number().min(1, { message: "Must be 1 or more characters long" }),
  price: z.number().min(0, { message: "Must be a positive number" }),
  createdAt: z
    .string()
    .min(4, { message: "Must be 4 or more characters long" }),
});
