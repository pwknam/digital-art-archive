import Link from "next/link";
import NavBar from "../../../components/NavBar";

export default function NewEntryPage() {
  return (
    <>
      <NavBar />
      <div className="flex justify-between h-screen">
        <div className="w-1/2 flex justify-center items-center">
          <div className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between">
            <Link href="/collection/create">Add New Collection</Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between">
            <Link href="/artwork/create">Add New Artwork</Link>
          </div>
        </div>
      </div>
    </>
  );
}
