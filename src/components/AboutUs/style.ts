import styled from 'styled-components';

export const AboutUsSection = styled.section`
  width: 100vw;
  height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.gray[900]};

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const AboutUsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 123px;

  @media (max-width: 1280px) {
    padding: 0 100px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 24px;
  }
`;

export const AboutUsImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 1280px) {
    margin-right: 24px;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 90px;
    justify-content: center;
  }
`;

export const AboutUsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const AboutUsSpan = styled.span`
  color: ${({ theme }) => theme.colors.green[200]};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 14px;

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const AboutUsH1 = styled.h1`
  color: ${({ theme }) => theme.colors.green[50]};
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 26px;

  @media (max-width: 1280px) {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const AboutUsP = styled.p`
  color: ${({ theme }) => theme.colors.green[100]};
  font-size: 16px;
  line-height: 26px;

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 32px;
  }
`;