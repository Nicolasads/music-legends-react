import styled from "styled-components";
import background from "./assets/background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;

  background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 24px 24px 228px;
  margin: auto auto 0;

  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    padding: 24px 24px 150px;
  }

  @media (max-width: 768px) {
    padding: 0 24px 72px;

    .controllers {
      column-gap: 30px;
      margin-bottom: 180px;
    }
  }
`;

export const PresentationDiv = styled.div``;

export const LogoImage = styled.img`
  width: 250px;
  height: auto;
`;

export const LogoTitle = styled.strong`
  line-height: 1.75rem;
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.regular};

  text-transform: uppercase;
  margin: 24px 0 32px;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    font-size: 1.25rem;
    margin: 16px 0 24px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;

  @media (max-width: 768px) {
    column-gap: 30px;

    button {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.span`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: ${(props) => props.theme.regular};
`;

export const MusicMobileInfo = styled.div`
  display: none;
  visibility: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    visibility: visible;
  }
`;

export const MobileIcon = styled.img`
  width: 20px;
  height: auto;
`;

export const MusicTitle = styled.h2`
  display: flex;
  align-items: center;
  column-gap: 24px;

  font-size: 2rem;
  color: ${(props) => props.theme.tertiary};
  line-height: 2.375rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.regular};
`;

export const MusicArtist = styled.h3`
  font-size: 1rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.regular};
`;
