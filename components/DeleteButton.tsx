"use client";

export default function DeleteButton({ artwork }) {
  function handleDelete() {
    fetch(`/api/artwork/${artwork.id}?method=DELETE`, {
      method: "DELETE",
    });

    if (artwork.collection == null) {
      window.location.href = `/artwork`;
    } else {
      window.location.href = `/collection/${artwork.collection.id}`;
    }
  }
  return <button onClick={handleDelete}>Delete Artwork</button>;
}
