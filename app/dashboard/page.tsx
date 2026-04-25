import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <Hero />
      <Features />
    </div>
  );
}