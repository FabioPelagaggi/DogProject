import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(): void {
    setIsOpen(!isOpen);
    console.log(isOpen);

  }

  return (
    <>
      <Header
        isOpen={isOpen}
        onToggle={handleToggle}
      />

      <Sidebar isOpen={isOpen} />
    </>
  )
}
