import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    background-color: #000000;
    background-image: url("../images/bloodstone_backgound.jpg");
  }  
  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }   
  `;

export default GlobalStyle;
