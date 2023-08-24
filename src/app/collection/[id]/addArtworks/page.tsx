// @ts-nocheck
import Link from "next/link";
import NavBar from "../../../../../components/NavBar";
import AddArtworkTile from "../../../../../components/AddArtworkTile";
import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authRouteHandler } from "@/app/api/auth/[...nextauth]/route";
import AddArtworkMiddle from "../../../../../components/AddArtworkMiddle";
import { useEffect, useState } from "react";
import Image from "next/image";

async function getArtworks(userId) {
  const data = prisma.artwork.findMany({
    where: { userId: userId, collectionId: null },
  });
  return data;
}

async function getSelectedCollection(id) {
  const data = prisma.collection.findFirst({
    where: { id: id },
  });
  return data;
}

export default async function AddArtworks(props) {
  const session = await getServerSession(authRouteHandler);
  const userId = parseInt(session?.user.id);
  const artworks = await getArtworks(userId);

  const id = props.params.id;

  const selectedCollection = await getSelectedCollection(Number(id));
  const collection_link = `/collection/${id}`;

  return (
    <>
      <NavBar />

      <h1 className="font-bold text-4xl mb-4">{selectedCollection?.title}</h1>
      <div className="flex justify-center">
        <h1 className="mb-4 font-bold text-2xl">
          Select artworks below to add to your {selectedCollection?.title}{" "}
          collection{" "}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-10">
        {artworks.map((artwork) => {
          return (
            <AddArtworkTile
              key={artwork.id}
              artwork={artwork}
              collectionId={selectedCollection?.id}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link
          className="font-bold text-2xl text-orange-400"
          href={collection_link}
        >
          Back to Collection
        </Link>
      </div>
    </>
  );
}
