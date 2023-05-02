"use client";
import { useRouter } from "next/navigation";

export default function DeleteButton({ artwork }) {
  const router = useRouter();
  console.log(artwork.collection.id);
  function handleDelete() {
    console.log(artwork.id);
    fetch(`/api/artwork/${artwork.id}?method=DELETE`, {
      method: "DELETE",
    });
    router.push(`/collection/${artwork.collection.id}`);
  }
  return <button onClick={handleDelete}>Delete Artwork</button>;
}
