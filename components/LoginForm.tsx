import Link from "next/link";
import { FC } from "react";

export interface LoginFormProps {
  handleSignIn: (value: any) => void;
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
}

export const LoginForm: FC<LoginFormProps> = ({
  handleSignIn,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
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
  );
};
