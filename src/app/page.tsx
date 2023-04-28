import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <p style={{ marginRight: "5px" }}>
        If you already have an account, click to{" "}
      </p>
      <Link
        href="/login"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Sign In
      </Link>
    </div>
  );
}
