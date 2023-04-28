"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e: any) {
    e.preventDefault();
    signIn("credentials", { username, password });
  }

  return (
    <form
      onSubmit={handleSignIn}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Login</button>
    </form>
  );
}
