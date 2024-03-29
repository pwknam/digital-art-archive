import Image from "next/image";
import Link from "next/link";
import { ArtworkEditForm } from "./ArtworkEditForm";
import { Artwork, Collection } from "@prisma/client";
import { FC } from "react";
import { prisma } from "../lib/prisma";
import { number } from "zod";

interface ArtworkDetailPageProps {
  artwork: Artwork;
  collection: Collection | null;
}

export const ArtworkDetailPage: FC<ArtworkDetailPageProps> = ({
  artwork,
  collection,
}) => {
  const collectionPage = `/collection/${artwork?.collectionId}`;

  return (
    <>
      <div className="text-center mb-4 flex flex-col">
        <p className="font-bold text-5xl mb-4">{artwork.title}</p>

        {collection && (
          <Link href={collectionPage} className="text-orange-400 text-xl">
            Go back to Collection Page
          </Link>
        )}
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
        {collection && (
          <>
            <div className="flex">
              <p className="mr-1 font-bold">Collection:</p>
              {collection && <p>{collection.title}</p>}
            </div>
            <p>{collection.description}</p>
          </>
        )}
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
