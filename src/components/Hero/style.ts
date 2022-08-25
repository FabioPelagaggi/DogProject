import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  width: 100vw;
  height: 100%;
  position: relative;
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 123px;

  @media (max-width: 1280px) {
    padding: 0 100px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

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
  margin-bottom: 84px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;

export const HeroSpan = styled.span`
  color: ${({ theme }) => theme.colors.green[200]};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    margin-bottom: 14px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.green[50]};
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 26px;

  @media (max-width: 1280px) {
    font-size: 38px;
    line-height: 44px;
  }

  @media (max-width: 1024px) {
    font-size: 34px;
    margin-bottom: 16px;
  }
`;

export const HeroP = styled.p`
  color: ${({ theme }) => theme.colors.green[100]};
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 36px;

  @media (max-width: 1024px) {
    width: 80%;
    margin-right: 36px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 36px 0 0 0 ;
  }
`;

export const BoxNumbers = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 100%;
  max-width: calc(100% - 123px * 2);
  min-height: 210px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border: 1px solid ${({ theme }) => theme.colors.green[100]};
  border-radius: 6px;
  top: 82%;

  @media (max-width: 1280px) {
    max-width: calc(100% - 100px * 2);
  }

  @media (max-width: 1024px) {
    max-width: calc(100% - 30px * 2);
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 24px * 2);
    flex-direction: column;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const NumBox = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green[100]};

  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;

export const TextBox = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.green[200]};
`;

export const Divider = styled.div`
  width: 1px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.green[200]};

  @media (max-width: 768px) {
    display: none;
  }
`;