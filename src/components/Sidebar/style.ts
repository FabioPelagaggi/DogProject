import styled from 'styled-components';

export const SidebarContainer = styled.aside`
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
