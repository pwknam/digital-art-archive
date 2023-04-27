import { prisma } from "../../../lib/prisma";
import Link from "next/link";

async function getCollections() {
  const data = prisma.collection.findMany();
  return data;
}

export default async function ArtworkCRUD() {
  const collections = await getCollections();

  return (
    <>
      <h1>Collections</h1>
      <h2>All Collections Below</h2>

      {collections.map((collection) => {
        return <h1 key={collection.id}>{collection.title}</h1>;
      })}

      <Link href="/collection/create">Go to Collection Create Page</Link>
    </>
  );
}
