
import Dropdown from '../Dropdown';
import Logo from '../Logo';
import {Instagram} from '@styled-icons/bootstrap/Instagram';
import {Facebook} from '@styled-icons/feather/Facebook';
import { Youtube } from '@styled-icons/remix-line/Youtube';
import {ArrowUp} from '@styled-icons/fa-solid/ArrowUp';

import {
    FooterSection, FooterWrapper, FooterSocial, FooterIcon,
    FooterMenu, MenuItem, MenuTitle, MenuButton,
    FooterLogo, LogoLink, LogoText, ScrollUpButton
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
              Início
            </MenuItem>
            <MenuItem>
              Ajude
            </MenuItem>
            <MenuItem>
              Sobre
            </MenuItem>
            <MenuItem>
              Histórias
            </MenuItem>
            <MenuItem>
              Contato
            </MenuItem>
            <MenuButton>
              Faça uma doação
            </MenuButton>
          </FooterMenu>
        </FooterWrapper>

        <FooterSocial>
          <FooterIcon>
            <Instagram size='25px'/>
          </FooterIcon>
          <FooterIcon>
            <Facebook size='28px'/>
          </FooterIcon>
          <FooterIcon>
            <Youtube size='30px'/>
          </FooterIcon>
        </FooterSocial>
      </FooterSection>
    )
  }
  