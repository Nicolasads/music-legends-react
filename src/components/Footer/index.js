import React from "react";
import {
  Container,
  FooterContent,
  IconLike,
  ImageIcon,
  MainControllers,
  MusicArtist,
  MusicControllers,
  MusicInfo,
  MusicTitle,
  PlayButton,
  SideControllers,
  TimeLine,
} from "./styles";

import heart from "../../assets/icons/heart.svg";
import repeat from "../../assets/icons/repeat.svg";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";
import minimize from "../../assets/icons/minimize-2.svg";
import rotate from "../../assets/icons/rotate-cw.svg";
import volume from "../../assets/icons/volume-2.svg";
import play from "../../assets/icons/play.svg";

export default function Footer() {
  return (
    <Container>
      <TimeLine></TimeLine>

      <FooterContent>
        <MusicInfo>
          <IconLike src={heart} />

          <MusicTitle>Warriors</MusicTitle>
          <MusicArtist>Riot Games ft. Imagine Dragons</MusicArtist>
        </MusicInfo>

        <MusicControllers>
          <ImageIcon src={repeat} />

          <MainControllers>
            <ImageIcon src={chevronLeft} />
            <PlayButton>
              <ImageIcon src={play} style={{ width: 22, height: 22 }} />
            </PlayButton>
            <ImageIcon src={chevronRight} />
          </MainControllers>

          <ImageIcon src={rotate} />
        </MusicControllers>

        <SideControllers>
          <ImageIcon src={volume} />
          <ImageIcon src={minimize} />
        </SideControllers>
      </FooterContent>
    </Container>
  );
}
