import { DisclosureItem, DisclosurePanel } from "./style";

interface Props {
  onToggle: (action: Boolean) => void;
}

export default function Disclosure({ onToggle }: Props) {
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
