import ChatDemo from "./components/ChatDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1016] p-6">
      <div className="w-full max-w-md">
        <ChatDemo />
      </div>
    </main>
  );
}