"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

export default function DeleteButton({ collection }) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/collection/delete?id=${collection.id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: collection.id }),
    });

    router.refresh();
  }
  return (
    <button onClick={handleDelete} className="underline">
      Delete {collection.title}
    </button>
  );
}
