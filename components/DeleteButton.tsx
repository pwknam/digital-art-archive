"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

export default function DeleteButton({ artwork }) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/artwork/${artwork.id}?method=DELETE`, {
      method: "DELETE",
    });

    router.refresh();
  }
  return (
    <button onClick={handleDelete} className="underline">
      Delete Artwork
    </button>
  );
}
