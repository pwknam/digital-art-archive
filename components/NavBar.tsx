import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Digital Art Archive</p>
        <Link
          href="/login"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Back to Sign In
        </Link>
      </nav>
    </div>
  );
}
