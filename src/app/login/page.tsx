"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import NavBar from "../../../components/NavBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginForm } from "../../../components/LoginForm";

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
        <LoginForm
          handleSignIn={handleSignIn}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      </div>
    </div>
  );
}
