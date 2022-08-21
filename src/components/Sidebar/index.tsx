import Button from '../Button';
import Disclosure from '../Disclosure';

import { NavArrow, NavSidebar, NavSidebarItem, NavSidebarLink, NavSidebarMenu, SidebarContainer } from './style';

interface onToggleAndHoverProps {
  isOpen: Boolean;
  disclosureIsOpen: Boolean;
  onToggle: (action: Boolean) => void;
  onToggleDisclosure: (action: Boolean) => void;
}

export default function Sidebar({
  isOpen,
  disclosureIsOpen,
  onToggle,
  onToggleDisclosure
}: onToggleAndHoverProps) {
  return (
    <SidebarContainer isOpen={isOpen}>

      <NavSidebar>
        <NavSidebarMenu>
          <NavSidebarItem onClick={onToggle}>
            <NavSidebarLink>
              Ínicio
            </NavSidebarLink>
          </NavSidebarItem>

          <NavSidebarItem onClick={onToggleDisclosure}>
            <NavSidebarLink>
              Ajude
              <NavArrow disclosureIsOpen={disclosureIsOpen}>
                {'>'}
              </NavArrow>
            </NavSidebarLink>
          </NavSidebarItem>

          {disclosureIsOpen && (
            <Disclosure onToggle={onToggle}/>
          )}

          <NavSidebarItem onClick={onToggle}>
            <NavSidebarLink>
              Sobre
            </NavSidebarLink>
          </NavSidebarItem>

          <NavSidebarItem onClick={onToggle}>
            <NavSidebarLink>
              Histórias
            </NavSidebarLink>
          </NavSidebarItem>

          <NavSidebarItem onClick={onToggle}>
            <NavSidebarLink>
              Contato
            </NavSidebarLink>
          </NavSidebarItem>

        </NavSidebarMenu>
      </NavSidebar>

      <Button onToggle={onToggle} >
        Faça uma doação
      </Button>
    </SidebarContainer>
  )
}
