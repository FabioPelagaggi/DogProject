import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Logo from '../Logo';
import {
  Bar, ButtonContainer, HeaderContainer, LogoContainer,
  LogoLink,
  MobileIcon, Navbar, NavItem,
  NavLink, NavMenu
} from './style';

interface Props {
  isOpen: Boolean;
  onToggle: (action: Boolean) => void;
}

export default function Header({ isOpen, onToggle }: Props) {
  const [isHover, setIsHover] = useState<Boolean>(false);

  function handleOpenDropdown(): void {
    setIsHover(true);
  }

  function handleCloseDropdown(): void {
    setIsHover(false);
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoLink href='#'>
          <Logo />
        </LogoLink>
      </LogoContainer>

      <Navbar>
        <NavMenu>
          <NavItem onMouseEnter={handleCloseDropdown}>
            <NavLink
              to="hero"
              smooth
              duration={500}
              spy
              exact
              offset={-75}
            >
              Ínicio
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={handleOpenDropdown}>
            <NavLink
              // to='#'
            >
              Ajude
            </NavLink>
            {isHover && (
              <Dropdown
                onCloseDropdown={handleCloseDropdown}
                onOpenDropdown={handleOpenDropdown}
              />
            )}
          </NavItem>

          <NavItem onMouseEnter={handleCloseDropdown}>
            <NavLink
              to="aboutUs"
              smooth
              duration={500}
              spy
              exact
              offset={-75}
            >
              Sobre
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={handleCloseDropdown}>
            <NavLink
                // to='#'
              >
              Histórias
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={handleCloseDropdown}>
            <NavLink
                // to='#'
              >
              Contato
            </NavLink>
          </NavItem>

        </NavMenu>
      </Navbar>

      <ButtonContainer>
        <Button>
          Faça sua doação
        </Button>
      </ButtonContainer>

      <MobileIcon
        onClick={onToggle}
      >
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
      </MobileIcon>
    </HeaderContainer>
  )
}
