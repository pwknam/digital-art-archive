import { ArtworkEditForm } from "../../../../components/ArtworkEditForm";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import { prisma } from "../../../../lib/prisma";
import { Artwork } from "@prisma/client";

const getArtworkByID = (id: Artwork["id"]): Promise<Artwork | null> => {
  return prisma.artwork.findUnique({ where: { id: Number(id) } });
};

interface ArtworkEditProps {
  params: { id: Artwork["id"] };
}

const ArtworkEdit = async (props: ArtworkEditProps) => {
  // Because the path is wrapped in [id], the id is available as a prop
  // See https://beta.nextjs.org/docs/api-reference/file-conventions/page
  const id = props.params.id;

  const artwork = await getArtworkByID(id);

  if (!artwork) {
    return <h1>Artwork not found</h1>;
  }

  return (
    <>
      <h1>Artwork Edit Form</h1>
      <ArtworkEditForm artwork={artwork} />
    </>
  );
};

export default ArtworkEdit;
