"use client";
import { Artwork } from "@prisma/client";
import { ArtworkForm, ArtworkFormProps } from "./ArtworkForm";
import { FC } from "react";
import { useParams, useRouter } from "next/navigation";

interface ArtworkEditFormProps {
  artwork?: Artwork;
}

export const ArtworkEditForm: FC<ArtworkEditFormProps> = (props) => {
  const router = useRouter();
  const id = useParams().id;

  const handleFormSubmit: ArtworkFormProps["handleFormSubmit"] = async (
    artwork
  ) => {
    await fetch(`/api/artwork/${id}`, {
      method: "PUT",
      body: JSON.stringify(artwork),
    });
    router.refresh();
  };

  return (
    <ArtworkForm artwork={props.artwork} handleFormSubmit={handleFormSubmit} />
  );
};
