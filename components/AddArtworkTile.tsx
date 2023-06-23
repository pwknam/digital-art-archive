"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FC } from "react";
import { Artwork } from "@prisma/client";
import { Collection } from "@prisma/client";

export interface AddArtworkTileProps {
  artwork: Artwork;
  collectionId: Collection;
}
const AddArtworkTile: FC<AddArtworkTileProps> = ({ artwork, collectionId }) => {
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function handleClick() {
    fetch("/api/collection/addArtwork", {
      method: "PATCH",
      body: JSON.stringify({
        artworkId: artwork.id,
        collectionId: collectionId,
      }),
    });

    setAdded(true);
    router.refresh();
  }

  return (
    <div
      className={
        added
          ? "border-4 rounded border-green-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
          : "border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
      }
    >
      <div className="text-center justify-start">
        <h1 className="font-bold">Artwork Title</h1>
        <h1>{artwork.title}</h1>
      </div>
      <div className="">
        <Image
          src={artwork.image}
          alt="image"
          width="400"
          height="50"
          className="rounded"
        />
      </div>
      {added ? (
        <h1 className="text-green-500 text-xl">Added</h1>
      ) : (
        <button className="underline" onClick={handleClick}>
          Add to Collection
        </button>
      )}
    </div>
  );
};
export default AddArtworkTile;
