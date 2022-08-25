import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  padding: 0 130px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[500]};
  
  @media (max-width: 1280px) {
    padding: 0 100px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100vw;
  display: flex;
  
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LogoContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column; 

  @media (max-width: 1024px) {
    width: 130px;
  }
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;

export const LogoText = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[300]};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.green[50]};
  }
`;

export const FooterMenu = styled.nav`
  display: flex;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
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
  @media (max-width: 768px) {
    
  }
`;

export const LinkButton = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green[200]};
  cursor: pointer;
  padding: 10px 24px;
  
  border-radius: 40px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
    color: ${({ theme }) => theme.colors.green[50]};
    border-color: ${({ theme }) => theme.colors.green[700]};
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 100vw;
  margin: 40px auto 0 auto;
  background-color: #522274;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[500]};

  
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLinks = styled.a`
  color: #fff;
`;