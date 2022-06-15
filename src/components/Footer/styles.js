import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  position: relative;
`;

export const TimeLine = styled.span`
  position: absolute;
  top: -2px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 400px;
  height: 4px;
  background: linear-gradient(
    90.35deg,
    #4ac08f 2.49%,
    #2fb4ff 101.2%,
    #2fb4ff 101.2%
  );

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) => props.theme.secondary};
    display: block;
    transform: translateY(-6px);
    filter: blur(0.5px);
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1720px;
  margin: 0 auto;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MusicInfo = styled.div`
  width: 100%;
  max-width: 400px;

  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 0 40px;
`;

export const IconLike = styled.img`
  grid-row: 1/3;
  width: 100%;
  height: auto;
  align-self: center;
`;

export const MusicTitle = styled.h2`
  color: ${(props) => props.theme.tertiary};
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: ${(props) => props.theme.medium};
`;

export const MusicArtist = styled.h3`
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: ${(props) => props.theme.medium};
  text-transform: uppercase;
`;

export const ImageIcon = styled.img``;

export const MusicControllers = styled.div`
  display: flex;
  align-items: center;
  column-gap: 100px;
`;

export const MainControllers = styled.div`
  display: flex;
  align-items: center;
  column-gap: 36px;
`;

export const PlayButton = styled.button`
  display: flex;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => props.theme.background_light};
  align-items: center;
  justify-content: center;
`;

export const SideControllers = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 85px;

  img {
    width: 32px;
    height: auto;
  }
`;