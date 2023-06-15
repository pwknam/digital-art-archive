import Link from "next/link";
import { FC } from "react";

interface Props {
  children: string;
  href?: string;
  type?: "link" | "form";
}

export const Button: FC<Props> = ({ children, href, type = "link" }) => {
  if (type === "form") {
    return (
      <button
        type="submit"
        className="font-bold rounded bg-orange-400 text-white mb-4 h-8"
      >
        Submit
      </button>
    );
  }

  return (
    <Link
      href={href ?? ""}
      className="font-bold border-2 rounded border-blue-500 flex flex-col items-center w-100 p-4 shadow-lg justify-between"
    >
      {children}
    </Link>
  );
};
