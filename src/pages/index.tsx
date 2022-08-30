import { useState } from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  function handleToggle(): void {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Header
        isOpen={isOpen}
        onToggle={handleToggle}
      />

      <Sidebar
        isOpen={isOpen}
        onToggle={handleToggle}
      />
      <Hero />
      <AboutUs />

      <Footer />
    </>
  )
}
