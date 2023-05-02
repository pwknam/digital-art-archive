import { ArtworkEditForm } from "../../../../components/ArtworkEditForm";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork } from "@prisma/client";
import Image from "next/image";
import NavBar from "../../../../components/NavBar";
import Link from "next/link";
import DeleteButton from "../../../../components/DeleteButton";

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
  const id = props.params.id;
  const user = await prisma.user.findFirst();
  const artwork = await getArtworkByID(id);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  }

  if (artwork.collection == null) {
    return (
      <>
        <NavBar />
        <div className="flex justify-end">
          <h1>{user?.email}</h1>
        </div>
        <div className="text-center mb-4 flex flex-col">
          <p className="font-bold text-5xl mb-4">
            Artwork Title: {artwork.title}
          </p>
          <button>Edit Artwork</button>
          <DeleteButton artwork={artwork} />
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
        </div>
        <div>
          <p className="font-bold text-2xl mb-2">Description</p>
          <p>{artwork.description}</p>
        </div>
        <ArtworkEditForm artwork={artwork} />
      </>
    );
  }

  const collectionPage = `/collection/${artwork.collection.id}`;

  return (
    <>
      <NavBar />
      <div className="flex justify-end">
        <h1>{user?.email}</h1>
      </div>
      <div className="text-center mb-4 flex flex-col">
        <p className="font-bold text-5xl mb-4">
          Artwork Title: {artwork.title}
        </p>
        <Link href={collectionPage}>Go back to Collection Page</Link>
        <button>Edit Artwork</button>
        <DeleteButton artwork={artwork} />
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
      <ArtworkEditForm artwork={artwork} />
    </>
  );
};

export default ArtworkIdPage;
