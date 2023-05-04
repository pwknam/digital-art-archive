"use client";

// import { useEffect } from "react";

export default function AddArtworkMiddle({ artworks }) {
  console.log(artworks);

  return (
    <div>
      <h1>Hello</h1>
      {artworks.map((artwork) => {
        return <h1 key={artwork.id}>{artwork.title}</h1>;
      })}
    </div>
  );
}
