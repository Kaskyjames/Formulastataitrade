import SecuritySnapshot from "@/components/SecuritySnapshot";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SecuritySnapshot from "@/components/SecuritySnapshot"; // 👈 Add this line

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      
      {/* 🔐 Security & Transparency Section */}
      <SecuritySnapshot />
      
      {/* Other sections can go below */}
    </main>
  );
}
