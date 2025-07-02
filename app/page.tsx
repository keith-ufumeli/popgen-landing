import { Hero } from "../src/components/sections/Hero";
import { About } from "../src/components/sections/About";
import { Research } from "../src/components/sections/Research";
import { Applications } from "../src/components/sections/Applications";
import { Contact } from "../src/components/sections/Contact";
import { Navigation } from "../src/components/sections/Navigation";
import { Footer } from "../src/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <About />
      
      <Research />
      
      <Applications />
      
      <Contact />
      
      <Footer />
    </main>
  );
}