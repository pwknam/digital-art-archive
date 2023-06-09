import { FC } from "react";

export interface CreateAccountProps {
  handleFormSubmit: (value: any) => void;
  username: string;
  password: string;
  confirmPassword: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

export const CreateAccount: FC<CreateAccountProps> = ({
  handleFormSubmit,
  username,
  password,
  confirmPassword,
  setUsername,
  setPassword,
  setConfirmPassword,
}) => {
  return (
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

      <label className="mb-1 font-bold text-orange-400">Confirm Password</label>
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
  );
};
