import styled from 'styled-components';

export const FooterSection = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  user-select: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const FooterWrapper = styled.footer`
  width: 100vw;
  display: flex;
  lign-items: left;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 80vw;
  }
`;

export const FooterLogo = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray[900]};
  padding: 25px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
export const LogoLink = styled.a`
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
`;

export const LogoText = styled.a`
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 14px;
`;

export const FooterMenu = styled.ul`
  background-color: ${({ theme }) => theme.colors.gray[900]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 25px 100px;
  
`;

export const MenuTitle = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.green[50]};
  }
`;

export const MenuButton = styled.li`
  color: ${({ theme }) => theme.colors.green[200]};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.green[50]};
  }
`;

export const FooterSocial = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-top: 2px solid ${({ theme }) => theme.colors.gray[500]};
  padding: 8px 100px;
  text-align: center;
  
`;

export const FooterIcon = styled.a`
  padding: 8px 5px;
  cursor: pointer;
`;

export const ScrollUpButton = styled.a`
  cursor: pointer;
  padding: 18px 15px;
  bottom: 15rem;
  background-color:  ${({ theme }) => theme.colors.red[100]};

`;