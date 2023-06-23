import { ArtworkEditForm } from "../../../../components/ArtworkEditForm";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork } from "@prisma/client";
import Image from "next/image";
import NavBar from "../../../../components/NavBar";
import Link from "next/link";
import DeleteButton from "../../../../components/DeleteButton";
import { ArtworkDetailPage } from "../../../../components/ArtworkDetailPage";

const getArtworkByID = (id: Artwork["id"]): Promise<Artwork | null> => {
  return prisma.artwork.findUnique({
    where: { id: Number(id) },
    include: {
      collection: true,
      galleries: true,
    },
  });
};

interface ArtworkInformation {
  params: { id: Artwork["id"] };
}

const ArtworkIdPage = async (props: ArtworkInformation) => {
  const id = props.params.id;
  const user = await prisma.user.findFirst();
  const artwork = await getArtworkByID(id);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  } else {
    return (
      <>
        <NavBar />
        <div className="flex justify-end">
          <h1>{user?.email}</h1>{" "}
        </div>
        <ArtworkDetailPage artwork={artwork} />;
      </>
    );
  }
};

export default ArtworkIdPage;
