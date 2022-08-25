
import Dropdown from '../Dropdown';
import Logo from '../Logo';


import {
    ButtonContainer, LinkButton, FooterContainer, LogoContainer,
    LogoLink,
    FooterWrapper, SocialMediaWrap, SocialIcons, SocialIconsLinks, NavItem, LogoText, FooterMenu,
    NavLink, NavMenu
  } from './style';

  interface onToggleAndHoverProps {
    isOpen: Boolean;
    isHover: Boolean;
    onToggle: (action: Boolean) => void;
    onOpenDropdown: (action: Boolean) => void;
    onCloseDropdown: (action: Boolean) => void;
  }
  
export default function Footer(
    {
        isOpen,
        isHover,
        onToggle,
        onOpenDropdown,
        onCloseDropdown
      }: onToggleAndHoverProps) {
  
    return (
      <FooterContainer>

        <FooterWrapper>
          <LogoContainer>
            <LogoLink href='#'>
              <Logo />
            </LogoLink>
            <LogoText>
              © 2022 SavePet.
            </LogoText>
            <LogoText>
              Todos os direitos reservados.
            </LogoText>
          </LogoContainer>
        
  
          <FooterMenu>
            <NavMenu>
              <NavItem onMouseEnter={onCloseDropdown}>
                <NavLink href="#">
                  Ínicio
                </NavLink>
              </NavItem>

                <NavLink href="#">
                  Ajude
                </NavLink>
              
                <NavLink href="#">
                  Sobre
                </NavLink>

                <NavLink href="#">
                  Histórias
                </NavLink>

                <NavLink href="#">
                  Contato
                </NavLink>

                <ButtonContainer>
                  <LinkButton>
                    Faça sua doação
                  </LinkButton>
                </ButtonContainer>
            </NavMenu>
          </FooterMenu>
        </FooterWrapper>

        <SocialMediaWrap>
          <SocialIcons>
              <SocialIconsLinks>
                
              </SocialIconsLinks>
              <SocialIconsLinks>
                @styled-icons/boxicons-logos/FacebookCircle
              </SocialIconsLinks>
            </SocialIcons>
        </SocialMediaWrap>
      </FooterContainer>
    )
  }
  