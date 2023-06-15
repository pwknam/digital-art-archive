import Link from "next/link";
import NavBar from "../../../components/NavBar";
import Image from "next/image";
import collection_logo from "public/collection_logo.png";
import artwork_logo from "public/artwork_logo.png";
import { Button } from "../../../components/Button";

export default function NewEntryPage() {
  return (
    <>
      <NavBar />
      <div className="mb-40"></div>
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Image
            src={collection_logo}
            alt="collection logo"
            width="300"
            height="150"
            className="mb-4"
          />

          <Button href="/collection/create">Add New Collection</Button>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Image
            src={artwork_logo}
            alt="collection logo"
            width="300"
            height="150"
            className="mb-4"
          />
          <Button href="/artwork/create">Add New Artwork</Button>
        </div>
      </div>
    </>
  );
}
