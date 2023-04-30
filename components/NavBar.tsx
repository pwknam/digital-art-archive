import Link from "next/link";
import Image from "next/image";
import logo from "public/art_logo.png";

export default function NavBar() {
  return (
    <div className=" w-full h-20 shawdow-xl z-[100] mb-4">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={logo} alt="logo" width="75" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/newEntry">
              <li className="ml-10 text-sm uppercase hover:border-b">
                New Entry
              </li>
            </Link>
            <Link href="/collection">
              <li className="ml-10 text-sm uppercase hover:border-b">
                View Collections
              </li>
            </Link>
            <Link href="/artwork">
              <li className="ml-10 text-sm uppercase hover:border-b">
                View Artworks
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
