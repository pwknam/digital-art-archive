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
      <h1>Artwork CRUD</h1>
      <h2>All Artworks Below</h2>
      <ul>
        {artworks.map((artwork) => {
          return <li key={artwork.id}>{artwork.title}</li>;
        })}
      </ul>
      <Link href="/artwork/create">Go to Artwork Create Page</Link>
    </>
  );
}
