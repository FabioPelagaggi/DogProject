import { Link } from 'react-scroll';
import styled from 'styled-components';

export const HelpSection = styled.div`
    width: 100vw;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vw;
    
    @media (max-width: 1080px) {
        margin-top: 16vw;
      }
    @media (max-width: 770px) {
        margin-top: 36vw;
        height: 1450px;
    }
`;

export const HelpText = styled.span`
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray[900]};
`;

export const HelpTextTitle = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green[200]};
`;
export const HelpTextDescription = styled.span`    
    font-size: 40px;
    font-weight: bold;
    font-family: 'DM Sans';
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[900]};
`;

export const HelpTypes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 770px) {
        flex-direction: column;
    }
`;

export const HelpTypeBoxGray = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
    padding: 24px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const HelpTypeBoxGreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
    padding: 24px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.green[200]};
`;

export const HelpTypeTitle = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin: 8px 2px;
`;

export const HelpTypeDescription = styled.span`
    font-size: 12px;
    margin: 15px 2px;
`;

export const DonationButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 24px;
  border: 1px solid ${({ theme }) => theme.colors.green[200]};
  border-radius: 40px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.green[200]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
    color: ${({ theme }) => theme.colors.green[50]};
    border-color: ${({ theme }) => theme.colors.green[700]};
  }
`;

export const PatreonButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 24px;
  border: 1px solid ${({ theme }) => theme.colors.green[200]};
  background-color: ${({ theme }) => theme.colors.green[700]};
  border-radius: 40px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.green[200]};

  &:hover {
    color: ${({ theme }) => theme.colors.green[50]};
    border-color: ${({ theme }) => theme.colors.green[700]};
    background-color: ${({ theme }) => theme.colors.green[200]};
  }
`;

export const AdoptButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 24px;
  border: 1px solid ${({ theme }) => theme.colors.green[200]};
  border-radius: 40px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.green[200]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
    color: ${({ theme }) => theme.colors.green[50]};
    border-color: ${({ theme }) => theme.colors.green[700]};
  }
`;

export const TextButton = styled.span`
  margin: 2px;
`;
