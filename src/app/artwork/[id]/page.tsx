import { ArtworkEditForm } from "../../../../components/ArtworkEditForm";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork, Collection } from "@prisma/client";
import Image from "next/image";
import NavBar from "../../../../components/NavBar";
import Link from "next/link";
import DeleteButton from "../../../../components/DeleteButton";
import { ArtworkDetailPage } from "../../../../components/ArtworkDetailPage";

const getArtworkByID = (id: Artwork["id"]): Promise<Artwork | null> => {
  return prisma.artwork.findUnique({
    where: { id: Number(id) },
    include: {
      collection: true,
      galleries: true,
    },
  });
};

interface ArtworkInformation {
  params: { id: Artwork["id"] };
}

// async function getSpecificCollection(collection_id: number) {
//   const data = prisma.collection.findUnique({
//     where: { id: collection_id },
//   });
//   return data;
// }

const getSpecificCollection = (
  collection_id: number
): Promise<Collection | null> => {
  return prisma.collection.findUnique({
    where: { id: collection_id },
  });
};

const ArtworkIdPage = async (props: ArtworkInformation) => {
  const id = props.params.id;
  const user = await prisma.user.findFirst();
  const artwork = await getArtworkByID(id);
  const collection = await getSpecificCollection(artwork?.collectionId || 0);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  } else {
    return (
      <>
        <NavBar />
        <div className="flex justify-end">
          <h1>{user?.email}</h1>{" "}
        </div>
        <ArtworkDetailPage artwork={artwork} collection={collection} />;
      </>
    );
  }
};

export default ArtworkIdPage;
