"use client";
import Image from "next/image";
import Link from "next/link";
import collectionImage from "public/collection.png";

export default function CollectionTile({ collection }) {
  function handleClick() {
    console.log(`My collection id is ${collection.id}`);
  }

  const collectionPageLink = `/collection/${collection.id}`;

  return (
    <div
      onClick={handleClick}
      className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
    >
      <div className="text-center justify-start">
        <h1 className="font-bold mb-2">Collection Name</h1>
        <h1>{collection.title}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={collectionImage}
          alt="image"
          width="150"
          height="50"
          className="rounded"
        />
        <p className="text-center">{collection.description}</p>
      </div>
      <div className="justify-end">
        <Link href={collectionPageLink} className="underline">
          Click for more information
        </Link>
      </div>
    </div>
  );
}
