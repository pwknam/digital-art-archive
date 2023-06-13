"use client";

// import { useEffect } from "react";

export default function AddArtworkMiddle({ artworks }: { artworks: any }) {
  console.log(artworks);

  return (
    <div>
      <h1>Hello</h1>
      {artworks.map((artwork: any) => {
        return <h1 key={artwork.id}>{artwork.title}</h1>;
      })}
    </div>
  );
}
