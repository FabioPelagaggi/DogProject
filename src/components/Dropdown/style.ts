import styled from 'styled-components';

export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  top: 0;
  width: 200px;
  padding: 8px 8px;
  margin-top: 75px;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 8px;
  box-shadow: 4px 4px 15px ${({ theme }) => theme.colors.gray[900]};
  `;

export const DropdownItem = styled.a`
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.green[50]};
  font-size: 14px;
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }

  &:active {
    font-weight: bold;
  }

`;