// import { ArtworkEditForm } from "../../../../components/ArtworkEditForm";
// import {
//   ArtworkForm,
//   ArtworkFormProps,
// } from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork } from "@prisma/client";
import Image from "next/image";
import NavBar from "../../../../components/NavBar";

const getArtworkByID = (id: Artwork["id"]): Promise<Artwork | null> => {
  return prisma.artwork.findUnique({
    where: { id: Number(id) },
    include: {
      collection: true,
      galleries: true, // include galleries
    },
  });
};

interface ArtworkInformation {
  params: { id: Artwork["id"] };
}

const ArtworkIdPage = async (props: ArtworkInformation) => {
  // Because the path is wrapped in [id], the id is available as a prop
  // See https://beta.nextjs.org/docs/api-reference/file-conventions/page
  const id = props.params.id;
  const user = await prisma.user.findFirst();
  const artwork = await getArtworkByID(id);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-end">
        <h1>{user?.email}</h1>
      </div>
      <div className="text-center mb-4">
        <p className="font-bold text-5xl">Artwork Title: {artwork.title}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          alt={artwork.title}
          width={700}
          height={350}
          src={artwork.image}
          className="mr-2"
        />
      </div>
      <div className="flex flex-col mb-4 items-center">
        <h1 className="font-bold text-2xl mb-2">Details</h1>

        <div className="flex mb-2">
          <p className="mr-1 font-bold">Size:</p>
          <p>{artwork.size}</p>
        </div>

        <div className="flex mb-2">
          <p className="mr-1 font-bold">Type:</p>
          <p>{artwork.type}</p>
        </div>

        <div className="flex mb-2">
          <p className="mr-1 font-bold">Medium:</p>
          <p>{artwork.medium}</p>
        </div>

        <div className="flex mb-2">
          <p className="mr-1 font-bold">Price:</p>
          <p>${artwork.price}.00</p>
        </div>

        <div className="flex mb-2">
          <p className="mr-1 font-bold">Date Created:</p>
          <p>{artwork.createdAt}</p>
        </div>

        <div className="flex">
          <p className="mr-1 font-bold">Collection:</p>
          {artwork.collection && <p>{artwork.collection.title}</p>}
        </div>
        <p>{artwork.collection.description}</p>
      </div>
      <div>
        <p className="font-bold text-2xl mb-2">Description</p>
        <p>{artwork.description}</p>
      </div>

      {/* <h2>Galleries:</h2>
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
      })} */}
    </>
  );
};

export default ArtworkIdPage;
