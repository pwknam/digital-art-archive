"use client";
import Image from "next/image";

export default function ArtworkTile({ artwork }) {
  function handleClick() {
    console.log(`My artwork id is ${artwork.id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
    >
      <h1 className="font-bold">{artwork.title}</h1>
      <Image
        src={artwork.image}
        alt="image"
        width="300"
        height="50"
        className="rounded"
      />
      <div>
        <h1 className="font-bold">Collection Name</h1>
        <h1>{artwork.collection.title}</h1>
      </div>
    </div>
  );
}
