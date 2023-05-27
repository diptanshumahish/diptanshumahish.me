import { Header, Work, Workflow } from "@/components";

export default async function Home() {
  return (
    <main className="w-full dark:bg-backgroundDark bg-backgroundLight transition-colors">
      <Header />
      <Work />
      <Workflow />
    </main>
  );
}
