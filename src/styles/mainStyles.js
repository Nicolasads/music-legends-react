import { createGlobalStyle } from "styled-components";

const MainStyles = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${(props) => props.theme.background};
    }
`;

export default MainStyles;
