"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

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
      <div className="w-1/3 flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl mb-4">Digital Art Archive</h1>
        <h1>Description of the software</h1>
      </div>
      <div className="w-2/3 bg-white flex justify-center items-center">
        <div>
          <h1 className="font-bold text-4xl mb-3">Create Account</h1>
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <label>Email</label>
            <input
              className="bg-gray-100 rounded mb-4 h-8"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label>Password</label>
            <input
              className="bg-gray-100 rounded mb-4 h-8"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <label>Confirm Password</label>
            <input
              className="bg-gray-100 rounded mb-4 h-8"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <button className="rounded bg-orange-400 text-white mb-4 h-8">
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
