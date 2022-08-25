import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 130px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
  z-index: 999;

  @media (max-width: 1280px) {
    padding: 0 100px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const LogoContainer = styled.div`
  width: 183px;

  @media (max-width: 1024px) {
    width: 130px;
  }
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  cursor: pointer;
  height: 75px;
`;

export const NavLink = styled.a`
  display: flex;
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

  &:active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green[50]};
    border-bottom: 3px solid ${({ theme }) => theme.colors.green[50]};
  }

  @media (max-width: 1024px) {
    padding: 0 12px;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Bar = styled.div`
  @media (max-width: 1024px) {
    width: 25px;
    height: 3px;
    margin: 5px ;
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.green[50]};

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1' )};
    }

    &:nth-child(1) {
      transform:  ${({ isOpen }) => (isOpen ? 'translateY(8px) rotate(45deg)' : 'none' )};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' )};
    }
  }
`;