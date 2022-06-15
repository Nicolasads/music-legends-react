import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 10px;
`;

export const NavHeader = styled.header`
  display: flex;
  width: 100%;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 56px;
  list-style: none;
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
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const Strong = styled.span`
  font-size: 1.125rem;
  line-height: 1.25rem;
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
