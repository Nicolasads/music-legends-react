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

  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-top: 24px;
  padding-bottom: 228px;
  margin: auto auto 0;

  display: flex;
  flex-direction: column;
`;

export const PresentationDiv = styled.div``;

export const LogoImage = styled.img`
  width: 250px;
  height: auto;
`;

export const LogoTitle = styled.strong`
  line-height: 1.75rem;
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.medium};

  text-transform: uppercase;
  margin: 24px 0 32px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
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
