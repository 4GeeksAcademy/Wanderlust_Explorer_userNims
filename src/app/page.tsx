import Link from "next/link";
import { experiences } from "@/data/experiences";

const HomePage = () => (
  <main>
    <section className="bg-gradient-to-b from-amber-50 via-stone-50 to-stone-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Wanderlust Labs
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Encontrá la próxima experiencia que vas a contar
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-stone-600">
          Rutas de vela, mercados nocturnos y caminatas al amanecer en {experiences.length} experiencias
          de todo el mundo. Buscá, filtrá y guardá tus favoritas.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-block rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Explorar experiencias
        </Link>
      </div>
    </section>
  </main>
);

export default HomePage;