import styled from "styled-components";

export const NavHeader = styled.header`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    z-index: 2;

    nav ul,
    div {
      top: -15px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 10px;

  header nav,
  header .user {
    width: 100%;
    max-width: 330px;
  }

  @media (max-width: 1080px) {
    header nav,
    header .user {
      max-width: 280px;
    }
  }

  @media (max-width: 768px) {
    button nav,
    h1,
    .user {
      z-index: 3;
    }
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    .user,
    div,
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const MenuButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  display: none;
  visibility: hidden;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  background: transparent;

  span {
    transition: all 0.6s;
  }

  &.isActive span:nth-child(even) {
    opacity: 0;
  }

  &.isActive span:nth-child(1) {
    transform: rotate(45deg) translateY(8.5px);
  }

  &.isActive span:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
  }

  @media (max-width: 768px) {
    display: flex;
    visibility: visible;
    z-index: 3;
  }
`;

export const MenuButtonSpan = styled.span`
  width: 24px;
  height: 2px;
  background: ${(props) => props.theme.primary};

  &:nth-child(even) {
    width: 18px;
  }
`;

export const Nav = styled.nav``;

export const Ul = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  column-gap: 56px;
  list-style: none;

  @media (max-width: 1080px) {
    column-gap: 32px;
  }

  @media (max-width: 768px) {
    position: fixed;
    height: 0;
    inset: 0;
    overflow: hidden;
    z-index: 2;

    background: rgba(20, 6, 31, 0.85);
    backdrop-filter: blur(4px);

    flex-direction: column;
    justify-content: center;
    row-gap: 48px;

    transition: all 0.4s;

    li a {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    &.isActive {
      height: 100vh;
    }
  }
`;

export const Li = styled.li.attrs((props) => ({
  className: props.className,
}))`
  font-size: 1.125rem;
  line-height: 1.25rem;
  position: relative;

  &.active {
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      transform: translateY(6px);
      width: 100%;
      height: 2px;

      background: ${(props) => props.theme.secondary};
    }
  }
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  line-height: 1.25rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  line-height: 2.375rem;
  font-weight: ${(props) => props.theme.medium};

  text-transform: uppercase;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    text-align: center;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  @media (max-width: 768px) {
    max-width: 48px;
  }
`;

export const Strong = styled.span`
  font-size: 1.125rem;
  line-height: 1.25rem;

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

export const ImageDiv = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  padding: 2px;
  background: linear-gradient(
    90.35deg,
    #4ac08f 2.49%,
    #2fb4ff 101.2%,
    #2fb4ff 101.2%
  );
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
