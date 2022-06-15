import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, button, textarea, input {
        color: ${(props) => props.theme.primary};
        font: 400 1rem "GT Eesti Pro Display", sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: 0;

        &:hover {
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;
