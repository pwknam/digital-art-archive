"use client";
import { Collection } from "@prisma/client";
import { DOMAttributes, useState } from "react";

// export interface ArtworkFormProps {
//   handleFormSubmit: (Artwork: Partial<Artwork>) => void;
// }

export interface CollectionFormProps {
  collection?: Collection;
  handleFormSubmit: (collection: Partial<Collection>) => void;
}

export function CollectionForm({ handleFormSubmit }: CollectionFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleFormInputs() {
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
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <button>Submit</button>
      </form>
    </>
  );
}
