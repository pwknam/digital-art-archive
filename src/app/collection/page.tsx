// @ts-nocheck
import { getServerSession } from "next-auth";
import NavBar from "../../../components/NavBar";
import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import { authRouteHandler } from "../api/auth/[...nextauth]/route";
import collectionImage from "public/collection_logo.png";
import Image from "next/image";
import CollectionTile from "../../../components/CollectionTile";

async function getCollections(userId) {
  const data = prisma.collection.findMany({
    where: { userId: userId },
    include: { artworks: true },
  });
  return data;
}

async function getUser(userId) {
  const user = prisma.user.findFirst({
    where: { id: userId },
  });
  return user;
}

export default async function ArtworkCRUD() {
  const session = await getServerSession(authRouteHandler);
  const userId = parseInt(session?.user.id);

  const collections = await getCollections(userId);
  const user = await getUser(userId);

  return (
    <>
      <NavBar />
      <div>
        <div className="flex justify-between mb-10">
          <h1 className="font-bold text-4xl">Collections</h1>
          <h1 className="text-2xl">{user.email}</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {collections.map((collection) => {
            return (
              <CollectionTile key={collection.id} collection={collection} />
            );
          })}
        </div>
      </div>
    </>
  );
}
