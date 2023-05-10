"use client";
import { Artwork } from "@prisma/client";
// import { useRouter } from "next/navigation";

import { DOMAttributes, useState } from "react";

// export interface ArtworkFormProps {
//   handleFormSubmit: (Artwork: Partial<Artwork>) => void;
// }

export interface ArtworkFormProps {
  artwork?: Artwork;
  handleFormSubmit: (artwork: Partial<Artwork>) => void;
}

export function ArtworkForm({ handleFormSubmit }: ArtworkFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [medium, setMedium] = useState("");
  const [size, setSize] = useState("");
  const [pieces, setPieces] = useState(0);
  const [price, setPrice] = useState(0);
  const [createdAt, setCreatedAt] = useState("");

  function handleFormInputs(e) {
    e.preventDefault();
    handleFormSubmit({
      title,
      description,
      image,
      type,
      medium,
      size,
      pieces,
      price,
      createdAt,
    });
  }

  return (
    <>
      <form
        onSubmit={handleFormInputs}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label className="mb-1 font-bold text-orange-400">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Medium</label>
        <input
          type="text"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Size</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Pieces</label>
        <input
          type="number"
          value={pieces}
          onChange={(e) => setPieces(e.target.valueAsNumber)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>
        <label className="mb-1 font-bold text-orange-400">
          Date - CreatedAt
        </label>
        <input
          type="date"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
          className="bg-gray-50 rounded mb-4 h-8"
        ></input>

        <button className="font-bold rounded bg-orange-400 text-white mb-4 h-8">
          Submit
        </button>
      </form>
    </>
  );
}
