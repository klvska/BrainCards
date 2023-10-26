import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    body{
        background: #f5f5f5;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        color: #333;
    }
`;
