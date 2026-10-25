
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-extrabold tracking-tight text-blue-700"
        >
          Nexa<span className="text-slate-900">Digital.</span>
        </Link>

        <button
          type="button"
          className="rounded-lg border px-3 py-2 text-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Buka atau tutup menu"
        >
          {menuOpen ? "Tutup ✕" : "☰ Menu"}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-2 border-b bg-white p-5 shadow-sm md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:p-0 md:shadow-none`}
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
