import { Header } from "@/components";

export default async function Home() {
  return (
    <main className="w-full dark:bg-backgroundDark bg-backgroundLight transition-colors">
      <Header />
      <div className="h-screen"></div>
    </main>
  );
}
