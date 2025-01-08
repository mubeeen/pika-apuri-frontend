import type { ReactNode } from "react";
import ClientConfigration from "./_components/ClientConfiguration";

export default function Layout({ children }: { children: ReactNode }) {
  return <ClientConfigration>{children}</ClientConfigration>;
}
