"use client";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const ArtworkTile = ({ artwork }: { artwork: any }) => {
  const artPageLink = `/artwork/${artwork.id}`;

  return (
    <div
      key={artwork.id}
      className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
    >
      <div className="text-center justify-start">
        <h1 className="text-xl font-bold mb-2">{artwork.title}</h1>
      </div>
      <div>
        <Image
          src={artwork.image}
          alt="image"
          width="400"
          height="50"
          className="rounded mb-2"
        />
      </div>
      <div className="flex flex-col justify-end">
        <a href={`/artwork/${artwork.id}`} className="underline mb-1">
          Click for more information
        </a>
        <DeleteButton artwork={artwork} />
      </div>
    </div>
  );
};
