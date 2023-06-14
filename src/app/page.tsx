"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import newLogo from "public/new_logo.png";
import Image from "next/image";
import { CreateAccount } from "../../components/CreateAccount";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleFormSubmit(e: { preventDefault: () => void }) {
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

          <CreateAccount
            handleFormSubmit={handleFormSubmit}
            username={username}
            password={password}
            confirmPassword={confirmPassword}
            setUsername={setUsername}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />

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
