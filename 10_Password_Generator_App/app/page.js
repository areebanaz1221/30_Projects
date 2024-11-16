
import PasswordGenerator from "../app/components/PasswordGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
      <PasswordGenerator />
    </main>
  );
}
