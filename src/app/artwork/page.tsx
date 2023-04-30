import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import NavBar from "../../../components/NavBar";
import ArtworkTile from "../../../components/ArtworkTile";

async function getArtworks(userId: any) {
  const data = prisma.artwork.findMany({
    where: { userId: userId },
    include: {
      collection: true,
    },
  });
  return data;
}

export default async function ArtworkCRUD() {
  // change this for session user
  const user = await prisma.user.findFirst();
  const artworks = await getArtworks(user?.id);

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
            // return <h1 key={artwork.id}>{artwork.title}</h1>;
            return <ArtworkTile key={artwork.id} artwork={artwork} />;
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/artwork/create" className="font-bold">
            Go to Artwork Create Page
          </Link>
        </div>
      </div>
    </>
  );
}
