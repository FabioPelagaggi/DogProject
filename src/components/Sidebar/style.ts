import styled from 'styled-components';
import { Link } from 'react-scroll';

interface LinkProps {
  // onClick: (action: Boolean) => void;
  to: string;
  smooth?: boolean;
  duration?: number;
  spy?: boolean;
  exact?: boolean;
  offset?: number;
}

interface IsOpenProps {
  isOpen: Boolean;
}

interface DisclosureIsOpenProps {
  disclosureIsOpen: Boolean;
}

export const SidebarContainer = styled.aside<IsOpenProps>`
  display: none;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: calc(100% - 75px);
  background-color: ${({ theme }) => theme.colors.gray[950]};
  color: white;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const NavSidebar = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const NavSidebarMenu = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  list-style: none;
  `;

export const NavSidebarItem = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavSidebarLink = styled(Link)<LinkProps>`
  display: flex;
  font-size: 24px;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[300]};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.green[50]};
  }

  @media (min-width: 1024px) {
    &:active {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.green[50]};
      border-bottom: 3px solid ${({ theme }) => theme.colors.green[50]};
    }
  }
`;

export const NavArrow = styled.span<DisclosureIsOpenProps>`
  position: absolute;
  right: 0;
  margin-right: 36px;
  transition: 0.3s ease-in-out;
  transform: ${({ disclosureIsOpen }) => (disclosureIsOpen ? 'rotate(90deg)' : '0')};
`;
