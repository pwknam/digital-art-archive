import Link from "next/link";
import NavBar from "../../../components/NavBar";
import Image from "next/image";
import collection_logo from "public/collection_logo.png";
import artwork_logo from "public/artwork_logo.png";

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
            width="200"
            height="150"
            className="mb-4"
          />
          <div className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between">
            <Link href="/collection/create" className="font-bold ">
              Add New Collection
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Image
            src={artwork_logo}
            alt="collection logo"
            width="200"
            height="150"
            className="mb-4"
          />
          <div className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between">
            <Link href="/artwork/create" className="font-bold">
              Add New Artwork
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
