"use client";
import { Collection } from "@prisma/client";
import { DOMAttributes, useState } from "react";

export interface ArtworkFormProps {
  handleFormSubmit: (Artwork: Partial<Artwork>) => void;
}

export interface CollectionFormProps {
  collection?: Collection;
  handleFormSubmit: (collection: Partial<Collection>) => void;
}

export function CollectionForm({ handleFormSubmit }: CollectionFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleFormInputs(e) {
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
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-100 rounded mb-4 h-8"
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-100 rounded mb-4 h-8"
        ></input>

        <button className="rounded bg-orange-400 text-white mb-4 h-8">
          Submit
        </button>
      </form>
    </>
  );
}
