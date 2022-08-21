import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isHover, setIsHover] = useState<Boolean>(false);
  const [disclosureIsOpen, setDisclosureIsOpen] = useState<Boolean>(false);

  function handleToggle(): void {
    setIsOpen(!isOpen);
  }

  function handleOpenDropdown(): void {
    setIsHover(true);
  }

  function handleCloseDropdown(): void {
    setIsHover(false);
  }

  function handleToggleDisclosure(): void {
    setDisclosureIsOpen(!disclosureIsOpen);
  }

  return (
    <>
      <Header
        isOpen={isOpen}
        isHover={isHover}
        onToggle={handleToggle}
        onOpenDropdown={handleOpenDropdown}
        onCloseDropdown={handleCloseDropdown}
      />

      <Sidebar
        isOpen={isOpen}
        disclosureIsOpen={disclosureIsOpen}
        onToggle={handleToggle}
        onToggleDisclosure={handleToggleDisclosure}
      />
    </>
  )
}
