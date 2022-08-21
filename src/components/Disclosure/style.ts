import styled from 'styled-components';

export const DisclosurePanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green[200]};
`;

export const DisclosureItem = styled.a`
  width: 100%;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }

  &:active {
    font-weight: bold;
  }
`;
