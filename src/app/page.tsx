import { Header, Workflow } from "@/components";

export default async function Home() {
  return (
    <main className="w-full dark:bg-backgroundDark bg-backgroundLight transition-colors">
      <Header />
      <Workflow />
    </main>
  );
}
