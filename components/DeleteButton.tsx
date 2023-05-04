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

    // if (artwork.collection == null) {
    //   window.location.href = `/artwork`;
    // } else {
    //   window.location.href = `/collection/${artwork.collection.id}`;
    // }
  }
  return (
    <button onClick={handleDelete} className="underline">
      Delete {artwork.title}
    </button>
  );
}
