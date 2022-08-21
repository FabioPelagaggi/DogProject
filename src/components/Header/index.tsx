import Button from '../Button';
import Dropdown from '../Dropdown';
import Logo from '../Logo';
import {
  Bar, ButtonContainer, HeaderContainer, LogoContainer,
  LogoLink,
  MobileIcon, Navbar, NavItem,
  NavLink, NavMenu
} from './style';

interface onToggleAndHoverProps {
  isOpen: Boolean;
  isHover: Boolean;
  onToggle: (action: Boolean) => void;
  onOpenDropdown: (action: Boolean) => void;
  onCloseDropdown: (action: Boolean) => void;
}

export default function Header({
  isOpen,
  isHover,
  onToggle,
  onOpenDropdown,
  onCloseDropdown
}: onToggleAndHoverProps) {


  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoLink href='#'>
          <Logo />
        </LogoLink>
      </LogoContainer>

      <Navbar>
        <NavMenu>
          <NavItem onMouseEnter={onCloseDropdown}>
            <NavLink href="#">
              Ínicio
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={onOpenDropdown}>
            <NavLink>
              Ajude
            </NavLink>
            {isHover && (
              <Dropdown
                onCloseDropdown={onCloseDropdown}
                onOpenDropdown={onOpenDropdown}
              />
            )}
          </NavItem>

          <NavItem onMouseEnter={onCloseDropdown}>
            <NavLink>
              Sobre
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={onCloseDropdown}>
            <NavLink>
              Histórias
            </NavLink>
          </NavItem>

          <NavItem onMouseEnter={onCloseDropdown}>
            <NavLink>
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
