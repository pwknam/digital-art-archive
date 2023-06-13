"use client";
import Image from "next/image";
import Link from "next/link";

export default function ArtworkTile({ artwork }: { artwork: any }) {
  const artPageLink = `/artwork/${artwork.id}`;

  return (
    <div className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between">
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
      <div className="flex flex-col justify-end">
        <Link href={artPageLink} className="underline">
          Click for more information
        </Link>
        {/* <button className="underline">Delete artwork</button> */}
      </div>
    </div>
  );
}
