import { Suspense } from "react";
import { ExplorerView } from "@/components/ExplorerView";

const ExperiencesPage = () => (
  <Suspense
    fallback={<p className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-600">Cargando experiencias…</p>}
  >
    <ExplorerView />
  </Suspense>
);

export default ExperiencesPage;