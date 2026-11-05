"use client";

import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";

const user = {
  name: "Camila Ferrer",
  role: "Product designer",
  location: "Buenos Aires, Argentina",
  email: "camila.ferrer@example.com",
  memberSince: "March 2024",
  bio: "Colecciono experiencias chicas: mercados de comida, caminatas al amanecer y cualquier cosa que implique un barco.",
};

export const ProfileView = () => {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Mi perfil</h1>
        <p className="mt-1 text-sm text-stone-600">Perfil simulado para el MVP del explorador.</p>
      </header>

      <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <span
            aria-hidden="true"
            className="grid h-16 w-16 place-items-center rounded-full bg-amber-100 text-xl font-bold text-amber-800"
          >
            CF
          </span>
          <div>
            <h2 className="text-xl font-semibold text-stone-900">{user.name}</h2>
            <p className="text-sm text-stone-600">
              {user.role} · {user.location}
            </p>
            <p className="text-sm text-stone-500">{user.email}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-stone-700">{user.bio}</p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-stone-600">Favoritos guardados</p>
          <p className="mt-1 text-3xl font-bold text-stone-900">{favoriteIds.length}</p>
          <Link
            href="/favorites"
            className="mt-3 inline-block text-sm font-medium text-amber-700 underline-offset-4 hover:underline"
          >
            Ver mis favoritos
          </Link>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-stone-600">Miembro desde</p>
          <p className="mt-1 text-3xl font-bold text-stone-900">{user.memberSince}</p>
          <Link
            href="/experiences"
            className="mt-3 inline-block text-sm font-medium text-amber-700 underline-offset-4 hover:underline"
          >
            Explorar experiencias
          </Link>
        </div>
      </section>
    </main>
  );
};