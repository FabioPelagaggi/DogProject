import { DropdownItem, DropdownMenu } from './style'

interface onCloseDropdownProps {
  onCloseDropdown: (action: Boolean) => void;
  onOpenDropdown: (action: Boolean) => void;
}

export default function Dropdown({ onCloseDropdown, onOpenDropdown }: onCloseDropdownProps) {
  return (
    <DropdownMenu
      onMouseOut={onCloseDropdown}
    >
      <DropdownItem
        onMouseEnter={onOpenDropdown}
        onClick={onCloseDropdown}
        href="#"
      >
        Adote
      </DropdownItem>

      <DropdownItem
        onMouseEnter={onOpenDropdown}
        onClick={onCloseDropdown}
        href="#"
      >
        Apadrinhe
      </DropdownItem>
    </DropdownMenu>
  )
}
