import { ArtworkEditForm } from "../../../../components/ArtworkEditForm";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork } from "@prisma/client";
import Image from "next/image";

const getArtworkByID = (id: Artwork["id"]): Promise<Artwork | null> => {
  return prisma.artwork.findUnique({
    where: { id: Number(id) },
    include: {
      collection: true,
      galleries: true, // include galleries
    },
  });
};

interface ArtworkEditProps {
  params: { id: Artwork["id"] };
}

const ArtworkEdit = async (props: ArtworkEditProps) => {
  // Because the path is wrapped in [id], the id is available as a prop
  // See https://beta.nextjs.org/docs/api-reference/file-conventions/page
  const id = props.params.id;

  const artwork = await getArtworkByID(id);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  }

  return (
    <>
      <h1>Artwork Edit Form</h1>
      {/* <ArtworkEditForm artwork={artwork} /> */}
      <p>{artwork.title}</p>
      <Image alt={artwork.title} width={350} height={350} src={artwork.image} />
      <p>{artwork.description}</p>
      <p>{artwork.medium}</p>
      <p>{artwork.pieces}</p>
      <p>{artwork.size}</p>
      {artwork.collection && <p>Collection: {artwork.collection.title}</p>}
      <p>{artwork.collection.description}</p>

      <h2>Galleries:</h2>
      {artwork.galleries.map(async (gallery) => {
        const galleryData = await prisma.gallery.findUnique({
          where: { id: gallery.galleryId },
        });
        return (
          <div key={gallery.galleryId}>
            <h3>{galleryData.name}</h3>
            <p>Address: {galleryData.address}</p>
            <p>Email: {galleryData.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ArtworkEdit;
