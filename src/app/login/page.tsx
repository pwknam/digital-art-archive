"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import NavBar from "../../../components/NavBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleSignIn(e: any) {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      callbackUrl: window.location.origin + "/newEntry",
    });
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-1/2 h-1/2">
        <form
          onSubmit={handleSignIn}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="font-bold text-4xl mb-7 h-8">Login</h1>
          <label className="mb-1 font-bold text-orange-400">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 rounded mb-4 h-8"
          ></input>

          <label className="mb-1 font-bold text-orange-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 rounded mb-4 h-8"
          ></input>
          <button className="font-bold rounded bg-orange-400 text-white mb-4 h-8">
            Login
          </button>
          <Link
            href="/"
            className="font-medium text-blue-500 dark:text-orange-500 hover:underline"
          >
            Back to Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
