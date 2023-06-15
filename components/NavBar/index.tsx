"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "public/tools_logo.png";
import { signIn, signOut } from "next-auth/react";
import { NavBarItem } from "./NavBarItem";

export default function NavBar() {
  function handleSignOut() {
    signOut({
      callbackUrl: window.location.origin,
    });
    console.log("Signing out");
  }

  const items = [
    { href: "/", label: "Home" },
    { href: "/newEntry", label: "New Entry" },
    { href: "/collection", label: "View All Collections" },
    { href: "/artwork", label: "View All Artworks" },
  ];

  return (
    <div className=" w-full h-20 shawdow-xl z-[100] mb-4 bg-grey-400">
      <div className="flex justify-between items-center w-full h-full">
        <a href="/">
          <Image src={logo} alt="logo" width="75" height="50" />
        </a>
        <div>
          <ul className="hidden md:flex">
            {items.map((item) => (
              <NavBarItem key={item.label} href={item.href}>
                {item.label}
              </NavBarItem>
            ))}
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
