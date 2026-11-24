"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function SideBar() {
  const pathname = usePathname();

  function getInitials(name: string) {
    return name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  const userName = "John Doe";
  const links = [
    { label: "Main", href: "/" },
    { label: "Profile", href: "/profile" },
  ];
  return (
    <aside className="sticky pb-6 top-0 flex flex-col h-screen w-56 shrink-0 self-start">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <nav className="space-y-2" aria-label="Main nav">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                  active
                    ? "bg-blue-600 font-semibold text-white shadow-sm"
                    : "font-medium text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 font-semibold text-white"
              aria-label={`${userName} avatar`}
            >
              {getInitials(userName)}
            </div>
            <h2 className="truncate text-lg font-semibold">{userName}</h2>
          </div>
          <button
            type="button"
            aria-label="Log out"
            title="Log out"
            className="shrink-0 cursor-pointer rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-200/70 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
