import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import Logo from '../Logo';
import ScrollUpBtn from '../ScrollUpButton';
import {
  FooterIcon, FooterLogo, FooterMenu,
  FooterSection, FooterSocial, FooterWrapper,
  LogoLink, LogoText, MenuButton,
  MenuItem, MenuLink, MenuTitle
} from './style';
export default function Footer() {

    return (
      <FooterSection>

        <FooterWrapper>
          <FooterLogo>
            <LogoLink>
              <Logo />
            </LogoLink>
            <LogoText>
              ©2022 - SavePet.
            </LogoText>
            <LogoText>
              Todos os direitos reservados.
            </LogoText>
          </FooterLogo>

          <FooterMenu>
            <MenuTitle>
              Menu
            </MenuTitle>
            <MenuItem>
              <MenuLink
                to="hero"
                smooth
                spy
                duration={500}
                offset={-75}
              >
                Início
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>
                Ajude
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>
                Sobre
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>
                Histórias
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>
                Contato
              </MenuLink>
            </MenuItem>
            <MenuButton>
              Faça uma doação
            </MenuButton>
          </FooterMenu>
        </FooterWrapper>

        <FooterSocial>
          <FooterIcon>
            <InstagramLogo size={25} />
          </FooterIcon>
          <FooterIcon>
            <FacebookLogo size={28} />
          </FooterIcon>
          <FooterIcon>
            <YoutubeLogo size={30} />
          </FooterIcon>
        </FooterSocial>

        <ScrollUpBtn />

      </FooterSection>
    )
  }
