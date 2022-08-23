import { useState } from 'react';
import Button from '../Button';
import Disclosure from '../Disclosure';

import {
  NavArrow,
  NavSidebar,
  NavSidebarItem,
  NavSidebarLink,
  NavSidebarMenu,
  SidebarContainer
} from './style';

interface Props {
  isOpen: Boolean;
  onToggle: (action: Boolean) => void;
}

export default function Sidebar({ isOpen, onToggle }: Props) {
  const [disclosureIsOpen, setDisclosureIsOpen] = useState<Boolean>(false);

  function handleToggleDisclosure(): void {
    setDisclosureIsOpen(!disclosureIsOpen);
  }

  return (
    <SidebarContainer isOpen={isOpen}>

      <NavSidebar>
        <NavSidebarMenu>
          <NavSidebarItem onClick={onToggle}>
            <NavSidebarLink>
              Ínicio
            </NavSidebarLink>
          </NavSidebarItem>

          <NavSidebarItem onClick={handleToggleDisclosure}>
            <NavSidebarLink>
              Ajude
              <NavArrow disclosureIsOpen={disclosureIsOpen}>
                {'>'}
              </NavArrow>
            </NavSidebarLink>
          </NavSidebarItem>

          {disclosureIsOpen && <Disclosure onToggle={onToggle}/>}

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
