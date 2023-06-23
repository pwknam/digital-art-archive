"use client";
import { Collection } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DeleteCollectionButtonProps {
  collection: Collection;
}

const DeleteCollectionButton: FC<DeleteCollectionButtonProps> = ({
  collection,
}) => {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/collection/delete?id=${collection.id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: collection.id }),
    });

    router.refresh();
  }
  return (
    <button onClick={handleDelete} className="underline ">
      Delete collection
    </button>
  );
};

export default DeleteCollectionButton;
