import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  width: 100vw;
  position: absolute;
  top: 75px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 24px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-left: 123px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin: 0;
    width: 100%;
  }
`;

export const HeroSpan = styled.span`
  color: ${({ theme }) => theme.colors.green[200]};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 1280px) {
    font-size: 14px;

  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.green[50]};
  font-size: 52px;
  font-weight: bold;
  line-height: 64px;
  margin-bottom: 26px;

  @media (max-width: 1024px) {
    font-size: 34px;
  }
`;

export const HeroP = styled.p`
  color: ${({ theme }) => theme.colors.green[100]};
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-left: 140px;
  margin-top: calc(118px - 75px);

  @media (max-width: 1280px) {
    margin-left: 0;
    padding: 36px 36px 0 36px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-top: 36px;
    padding: 0 calc(76px - 24px) 0 calc(76px - 24px);
  }
`;


