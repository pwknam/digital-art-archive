"use client";
import { Collection } from "@prisma/client";
import { DOMAttributes, FC, useState } from "react";
import { Artwork } from "@prisma/client";

export interface ArtworkFormProps {
  handleFormSubmit: (Artwork: Partial<Artwork>) => void;
}

export interface CollectionFormProps {
  collection?: Collection;
  handleFormSubmit: (collection: Partial<Collection>) => void;
}

export const CollectionForm: FC<CollectionFormProps> = ({
  handleFormSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleFormInputs(e: { preventDefault: () => void }) {
    e.preventDefault();
    handleFormSubmit({
      title,
      description,
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

        <button className="font-bold rounded bg-orange-400 text-white mb-4 h-8">
          Submit
        </button>
      </form>
    </>
  );
};
