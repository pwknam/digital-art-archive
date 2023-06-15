import Link from "next/link";
import { FC } from "react";

interface Props {
  children: string;
  href: string;
}
export const NavBarItem: FC<Props> = ({ children, href }) => {
  return (
    <li className="ml-10 text-md hover:border-b">
      <Link href={href}>{children}</Link>
    </li>
  );
};
