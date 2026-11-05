"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/hooks/useFavorites";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link href="/" className="text-lg font-bold tracking-tight text-stone-900">
          Wanderlust<span className="text-amber-600">.</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-0.5 text-[13px] sm:gap-1 sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 transition sm:px-3 ${
                  isActive(link.href)
                    ? "bg-amber-100 font-semibold text-amber-900"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {link.label}
                {link.href === "/favorites" && favoriteIds.length > 0 ? (
                  <span className="rounded-full bg-amber-600 px-1.5 text-xs font-semibold text-white">
                    {favoriteIds.length}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};