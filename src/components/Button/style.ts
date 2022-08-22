import styled from 'styled-components';

export const LinkButton = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green[200]};
  cursor: pointer;
  padding: 10px 24px;
  border: 1px solid ${({ theme }) => theme.colors.green[200]};
  border-radius: 40px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
    color: ${({ theme }) => theme.colors.green[50]};
    border-color: ${({ theme }) => theme.colors.green[700]};
  }
`;