import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar renders a <header> and Footer a <footer>; neither belongs inside
          <main>, which previously wrapped all three and broke the landmarks. */}
      <Navbar />
      <main id="main">
        <Hero />
        <Now />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
