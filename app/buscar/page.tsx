import type { Metadata } from "next";
import { SearchClient } from "@/components/search/search-client";

export const metadata: Metadata = {
  title: "Buscar · Acércate a la IA",
  description: "Busca en toda la web: artículos, casos, herramientas, preguntas y glosario.",
};

export default function BuscarPage() {
  return <SearchClient />;
}
