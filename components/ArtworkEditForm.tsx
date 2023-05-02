"use client";
import { Artwork } from "@prisma/client";
import { ArtworkForm, ArtworkFormProps } from "./ArtworkForm";
import { FC } from "react";
import { useParams } from "next/navigation";

interface ArtworkEditFormProps {
  artwork?: Artwork;
}

export const ArtworkEditForm: FC<ArtworkEditFormProps> = (props) => {
  const id = useParams().id;

  const handleFormSubmit: ArtworkFormProps["handleFormSubmit"] = (artwork) => {
    fetch(`/api/artwork/${id}?method=PUT`, {
      method: "PUT",
      body: JSON.stringify(artwork),
    });
  };

  return (
    <ArtworkForm artwork={props.artwork} handleFormSubmit={handleFormSubmit} />
  );
};
