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
  }  
  body, input, button {
    font-family: 'Righteous', cursive;
    font-size: 14px;
  }   
  `;

export default GlobalStyle;
