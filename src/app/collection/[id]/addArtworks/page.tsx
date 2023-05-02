import Link from "next/link";
import NavBar from "../../../../../components/NavBar";
import AddArtworkTile from "../../../../../components/AddArtworkTile";
import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authRouteHandler } from "@/app/api/auth/[...nextauth]/route";
// import { useRouter } from "next/router";

async function getArtworks(userId) {
  const data = prisma.artwork.findMany({
    where: { userId: userId, collectionId: null },
  });
  return data;
}

export default async function AddArtworks() {
  const session = await getServerSession(authRouteHandler);
  const userId = parseInt(session?.user.id);
  const artworks = await getArtworks(userId);

  return (
    <>
      <NavBar />

      <h1 className="font-bold text-4xl mb-4">**Collection Name**</h1>
      <div className="flex justify-center">
        <h1 className="mb-4 font-bold text-2xl">Add more artworks</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-10">
        {artworks.map((artwork) => {
          return <AddArtworkTile key={artwork.id} artwork={artwork} />;
        })}
      </div>
      <div className="flex justify-center">
        <Link className="font-bold text-2xl" href="/collection">
          Back to Collection
        </Link>
      </div>
    </>
  );
}
