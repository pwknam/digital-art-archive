"use client";
import { Artwork } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DeleteButtonProps {
  artwork: Artwork;
}

const DeleteButton: FC<DeleteButtonProps> = ({ artwork }) => {
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
};
export default DeleteButton;
