import { getServerSession } from "next-auth";
import CollectionTile from "../../../components/CollectionTitle";
import NavBar from "../../../components/NavBar";
import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import { authRouteHandler } from "../api/auth/[...nextauth]/route";
import collectionImage from "public/collection_logo.png";
import DeleteCollectionButton from "../../../components/DeleteCollectionButton";
import Image from "next/image";

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
              <div
                key={collection.id}
                className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
              >
                <div className="text-center justify-start">
                  <h1 className="font-bold text-2xl mb-2">
                    {collection.title}
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={collectionImage}
                    alt="image"
                    width="150"
                    height="50"
                    className="rounded mb-2"
                  />
                  <p className="text-center mb-4">{collection.description}</p>
                </div>
                <div className="justify-end flex flex-col items-center">
                  <a
                    href={`/collection/${collection.id}`}
                    className="underline mb-1 "
                  >
                    Click for more information
                  </a>
                  <DeleteCollectionButton collection={collection} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
