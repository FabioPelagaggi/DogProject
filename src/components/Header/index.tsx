import Logo from '../Logo';
import {
  Bar, Button, HeaderContainer, LogoContainer,
  MobileIcon, Navbar, NavItem,
  NavLink, NavMenu
} from './style';

interface onToggleProps {
  onToggle: (action: Boolean) => void;
  isOpen: Boolean;
}

export default function Header({ onToggle, isOpen }: onToggleProps) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Navbar>
        <NavMenu>
          <NavItem>
            <NavLink href="#">
              Ínicio
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              Ajude
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              Sobre
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              Histórias
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              Contato
            </NavLink>
          </NavItem>

        </NavMenu>
      </Navbar>

      <Button>
        Faça uma doação
      </Button>

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
