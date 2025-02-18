import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    } 

    html, body, #root {
        width: 100%;
        height: 100%;
    }
`;

export const AppContainer = styled.section`
    width: 100%;
    height: 100%;
`;
