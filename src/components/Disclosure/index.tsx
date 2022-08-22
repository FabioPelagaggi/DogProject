import { DisclosureItem, DisclosurePanel } from "./style";

interface onToggleProps {
  onToggle: (action: Boolean) => void;
}

export default function Disclosure({ onToggle }) {
  return (
    <DisclosurePanel>
      <DisclosureItem onClick={onToggle}>
        Adote
      </DisclosureItem>

      <DisclosureItem onClick={onToggle}>
        Apadrinhe
      </DisclosureItem>
    </DisclosurePanel>
  )
}
