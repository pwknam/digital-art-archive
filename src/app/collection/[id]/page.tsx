import { Collection } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";
import Image from "next/image";
import NavBar from "../../../../components/NavBar";
import ArtworkTile from "../../../../components/ArtworkTile";
import Link from "next/link";
import Router from "next/router";
import DeleteButton from "../../../../components/DeleteButton";

const getCollectionById = (
  id: Collection["id"]
): Promise<Collection | null> => {
  return prisma.collection.findUnique({
    where: { id: Number(id) },
    include: {
      artworks: true,
    },
  });
};

interface CollectionInformation {
  params: { id: Collection["id"] };
}

const CollectionIdPage = async (props: CollectionInformation) => {
  const id = props.params.id;

  const collection = await getCollectionById(id);

  if (!collection) {
    return <h1>Collection not found</h1>;
  }

  const addArtworksPage = `/collection/${id}/addArtworks`;

  return (
    <>
      <NavBar />
      <div>
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-4xl">{collection.title}</h1>
          <h1 className="text-2xl">{collection.description}</h1>
        </div>
        <h2 className="text-2xl mb-4">Artworks</h2>
        <div className="grid grid-cols-4 gap-4 mb-10">
          {collection.artworks.map(async (artwork) => {
            const artworkData = await prisma.artwork.findUnique({
              where: { id: artwork.id },
              include: { collection: true },
            });
            // return <ArtworkTile key={artworkData?.id} artwork={artworkData} />;
            return (
              <div
                key={artwork.id}
                className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
              >
                <div className="text-center justify-start">
                  {/* <h1 className="font-bold">Artwork Title</h1> */}
                  <h1 className="font-bold text-xl mb-2">{artwork.title}</h1>
                </div>
                <div className="">
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
                  {/* <button className="underline">Delete artwork</button> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link
            href={addArtworksPage}
            className="font-bold text-orange-400 text-2xl"
          >
            Add More Artworks
          </Link>
        </div>
      </div>
    </>
  );
};

export default CollectionIdPage;
