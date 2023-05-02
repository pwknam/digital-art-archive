"use client";

export default function DeleteButton({ artwork }) {
  console.log(artwork.collection.id);
  function handleDelete() {
    console.log(artwork.id);
    fetch(`/api/artwork/${artwork.id}?method=DELETE`, {
      method: "DELETE",
    });
    window.location.href = `/collection/${artwork.collection.id}`;
  }
  return <button onClick={handleDelete}>Delete Artwork</button>;
}
