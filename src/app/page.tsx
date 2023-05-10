"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import newLogo from "public/new_logo.png";
import Image from "next/image";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      callbackUrl: window.location.origin + "/newEntry",
    });
  }

  return (
    <div className="flex justify-between h-screen">
      <div className="w-1/2 flex justify-center items-center flex-col text-center">
        <h1 className="font-bold text-7xl mb-8">My Art Archive</h1>
        <Image
          src={newLogo}
          alt="logo image"
          width="250"
          height="100"
          className="mb-8"
        />
        <h1 className="text-2xl p-4">
          Digitally store and track your artworks as your artistic career
          unfolds
        </h1>
      </div>
      <div className="w-1/2 bg-white flex justify-center items-center">
        <div>
          <h1 className="font-bold text-4xl mb-7">Create Account</h1>
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <label className="mb-1 font-bold text-orange-400">Email</label>
            <input
              className="bg-gray-200 rounded mb-4 h-8"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label className="mb-1 font-bold text-orange-400">Password</label>
            <input
              className="bg-gray-200 rounded mb-4 h-8"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <label className="mb-1 font-bold text-orange-400">
              Confirm Password
            </label>
            <input
              className="bg-gray-200 rounded mb-4 h-8"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <button className="font-bold rounded bg-orange-400 text-white mb-4 h-8">
              Submit
            </button>
          </form>

          <div className="flex">
            <p className="mr-1">If you already have an account, continue to </p>
            <Link
              href="/login"
              className="font-medium text-orange-400 dark:text-orange-500 hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
