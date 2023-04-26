import "server-only";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork } from "@prisma/client";
import { useRouter } from "next/router";

async function getArtwork(id: Artwork["id"]) {
  const data = prisma.artwork.findFirst({ where: { id } });
  return data;
}

export default function ArtworkEdit(props) {
  console.log(props);
  const handleFormSubmit: ArtworkFormProps["handleFormSubmit"] = (data) => {
    // fetch("/api/artwork", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <>
      <h1>Artwork Edit Form</h1>
      <ArtworkForm handleFormSubmit={handleFormSubmit} />
    </>
  );
}
