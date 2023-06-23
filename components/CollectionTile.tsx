"use client";
import Image from "next/image";
import Link from "next/link";
import collectionImage from "public/collection.png";
import { Collection } from "@prisma/client";
import { FC } from "react";
import DeleteCollectionButton from "./DeleteCollectionButton";

interface CollectionTileProps {
  collection: Collection;
}

const CollectionTile: FC<CollectionTileProps> = ({ collection }) => {
  const collectionPageLink = `/collection/${collection.id}`;

  return (
    <div
      key={collection.id}
      className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
    >
      <div className="text-center justify-start">
        <h1 className="font-bold text-2xl mb-2">{collection.title}</h1>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={collectionImage}
          alt="image"
          width="150"
          height="50"
          className="rounded mb-2"
        />
        <p className="text-center mb-4">{collection.description}</p>
      </div>
      <div className="justify-end flex flex-col items-center">
        <a href={`/collection/${collection.id}`} className="underline mb-1 ">
          Click for more information
        </a>
        <DeleteCollectionButton collection={collection} />
      </div>
    </div>
  );
};

export default CollectionTile;
