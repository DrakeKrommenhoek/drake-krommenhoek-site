import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Upcoming from "@/components/Upcoming";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Upcoming />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
