import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { FavoritesProvider } from "@/hooks/useFavorites";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Descubrí y guardá experiencias únicas alrededor del mundo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900">
        <FavoritesProvider>
          <Suspense fallback={<div className="h-14 border-b border-stone-200" />}>
            <Navbar />
          </Suspense>
          <div className="flex-1">{children}</div>
          <footer className="border-t border-stone-200 px-4 py-6 text-center text-xs text-stone-500">
            Wanderlust Labs · MVP con datos ficticios
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}