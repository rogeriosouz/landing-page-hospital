import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: #fff;
    }

    body, 
    button, 
    textArea, 
    input {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;
