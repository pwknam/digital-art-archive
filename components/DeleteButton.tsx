"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

export default function DeleteButton({ artwork }) {
  const router = useRouter();

  function handleDelete() {
    fetch(`/api/artwork/${artwork.id}?method=DELETE`, {
      method: "DELETE",
    });

    router.refresh();
  }
  return (
    <button onClick={handleDelete} className="underline">
      Delete {artwork.title}
    </button>
  );
}
