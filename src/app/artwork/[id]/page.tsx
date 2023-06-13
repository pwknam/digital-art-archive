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
          <p className="font-bold text-5xl mb-4">{artwork.title}</p>
        </div>
        <div className="flex justify-center items-center flex-col mb-6">
          <Image
            alt={artwork.title}
            width={1000}
            height={350}
            src={artwork.image}
            className="mr-2 rounded-md mb-6"
          />{" "}
          <div className=" flex flex-col w-1/3 text-center">
            <p className="font-bold text-2xl mb-2 text-orange-400">
              Description
            </p>
            <p>{artwork.description}</p>
          </div>
        </div>
        <div className="flex flex-col mb-20 items-center">
          <h1 className="font-bold text-2xl mb-2 text-orange-400">Details</h1>

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
        <div className="flex justify-center">
          <div className="w-1/3">
            <div>
              <h1 className="font-bold text-orange-400 text-2xl mb-4">
                Edit Artwork Entry
              </h1>
              <div>
                <ArtworkEditForm artwork={artwork} />
              </div>
            </div>
          </div>
        </div>
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
        <p className="font-bold text-5xl mb-4">{artwork.title}</p>
        <Link href={collectionPage} className="text-orange-400 text-xl">
          Go back to Collection Page
        </Link>
        {/* <button>Edit Artwork</button> */}
      </div>
      <div className="flex justify-center items-center flex-col mb-6">
        <Image
          alt={artwork.title}
          width={1000}
          height={350}
          src={artwork.image}
          className="mr-2 rounded-md mb-6"
        />{" "}
        <div className=" flex flex-col w-1/3 text-center">
          <p className="font-bold text-2xl mb-2 text-orange-400">Description</p>
          <p>{artwork.description}</p>
        </div>
      </div>
      <div className="flex flex-col mb-20 items-center">
        <h1 className="font-bold text-2xl mb-2 text-orange-400">Details</h1>

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
      <div className="flex justify-center">
        <div className="w-1/3">
          <div>
            <h1 className="font-bold text-orange-400 text-2xl mb-4">
              Edit Artwork Entry
            </h1>
            <div>
              <ArtworkEditForm artwork={artwork} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkIdPage;
