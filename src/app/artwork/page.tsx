import NavBar from "../../../components/NavBar";
import { prisma } from "../../../lib/prisma";
import Link from "next/link";

async function getArtworks() {
  const data = prisma.artwork.findMany();
  return data;
}

export default async function ArtworkCRUD() {
  const artworks = await getArtworks();

  return (
    <>
      <NavBar />
      <h1>Artworks</h1>
      <h2>All Artworks Below</h2>
      <div className="grid grid-cols-4 gap-4">
        {artworks.map((artwork) => {
          return <h1 key={artwork.id}>{artwork.title}</h1>;
        })}
      </div>

      <Link href="/artwork/create">Go to Artwork Create Page</Link>
    </>
  );
}
