import React, { useState } from "react";
import {
  Container,
  HeaderTitle,
  Image,
  ImageDiv,
  Li,
  MenuButton,
  MenuButtonSpan,
  Nav,
  NavHeader,
  NavLink,
  Strong,
  Ul,
  UserDiv,
} from "./styles";

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <NavHeader>
      <Container className="nav-container">
        <MenuButton
          className={visible ? "isActive" : ""}
          type="button"
          onClick={() => setVisible(!visible)}
        >
          <MenuButtonSpan></MenuButtonSpan>
          <MenuButtonSpan></MenuButtonSpan>
          <MenuButtonSpan></MenuButtonSpan>
          <MenuButtonSpan></MenuButtonSpan>
        </MenuButton>

        <Nav>
          <Ul className={visible ? "isActive" : ""}>
            <Li>
              <NavLink href="/">Início</NavLink>
            </Li>
            <Li>
              <NavLink href="/">Buscar</NavLink>
            </Li>
            <Li className="active">
              <NavLink href="/">Suas bibliotecas</NavLink>
            </Li>
          </Ul>
        </Nav>

        <HeaderTitle>Music Legends</HeaderTitle>

        <UserDiv className="user">
          <Strong>Nicolas Alexsander</Strong>

          <ImageDiv>
            <Image
              src="https://avatars.githubusercontent.com/u/50683388?v=4"
              alt="user"
            />
          </ImageDiv>
        </UserDiv>
      </Container>
    </NavHeader>
  );
}
