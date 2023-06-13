import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import NavBar from "../../../components/NavBar";
import ArtworkTile from "../../../components/ArtworkTile";
// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authRouteHandler } from "../api/auth/[...nextauth]/route";
import DeleteButton from "../../../components/DeleteButton";
import Image from "next/image";

async function getArtworks(userId) {
  const data = prisma.artwork.findMany({
    where: { userId: userId },
    include: {
      collection: true,
    },
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
  // change this for session user
  const session = await getServerSession(authRouteHandler);
  const userId = parseInt(session?.user.id);

  const artworks = await getArtworks(userId);
  const user = await getUser(userId);
  console.log(user);

  return (
    <>
      <NavBar />
      <div>
        <div className="flex justify-between mb-10">
          <h1 className="font-bold text-4xl">Artworks</h1>
          <h1 className="text-2xl">{user.email}</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {artworks.map((artwork) => {
            return (
              <div
                key={artwork.id}
                className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
              >
                <div className="text-center justify-start">
                  <h1 className="text-xl font-bold mb-2">{artwork.title}</h1>
                </div>
                <div>
                  <Image
                    src={artwork.image}
                    alt="image"
                    width="400"
                    height="50"
                    className="rounded mb-2"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <a href={`/artwork/${artwork.id}`} className="underline mb-1">
                    Click for more information
                  </a>
                  <DeleteButton artwork={artwork} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
