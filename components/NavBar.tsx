"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "public/tools_logo.png";
import { signIn, signOut } from "next-auth/react";

export default function NavBar() {
  function handleSignOut() {
    signOut({
      callbackUrl: window.location.origin,
    });
    console.log("Signing out");
  }

  return (
    <div className=" w-full h-20 shawdow-xl z-[100] mb-4 bg-grey-400">
      <div className="flex justify-between items-center w-full h-full">
        <a href="/">
          <Image src={logo} alt="logo" width="75" height="50" />
        </a>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Home</li>
            </Link>
            <Link href="/newEntry">
              <li className="ml-10 text-md hover:border-b">New Entry</li>
            </Link>
            <Link href="/collection">
              <li className="ml-10 text-md hover:border-b">
                View All Collections
              </li>
            </Link>
            <Link href="/artwork">
              <li className="ml-10 text-md hover:border-b">
                View All Artworks
              </li>
            </Link>
            <button
              onClick={handleSignOut}
              className="ml-10 text-md hover: border-b text-orange-400"
            >
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
