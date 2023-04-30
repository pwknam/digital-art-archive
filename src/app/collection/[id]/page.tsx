import { Collection } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";
import Image from "next/image";
import NavBar from "../../../../components/NavBar";

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

  console.log(collection.artworks[0].id);

  return (
    <>
      <NavBar />
      <div>
        <h1>{collection.title}</h1>
        <h1>{collection.description}</h1>
        <h2>Artworks:</h2>
        {collection.artworks.map(async (artwork) => {
          const artworkData = await prisma.artwork.findUnique({
            where: { id: artwork.id },
          });
          return (
            <div key={artwork.galleryId}>
              <h3>{artworkData.title}</h3>
              <Image
                alt={artwork.title}
                width={350}
                height={350}
                src={artworkData.image}
              />
              <p>Email: {artworkData.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CollectionIdPage;
