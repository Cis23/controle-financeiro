import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size: 62.5%;
  }
  body {
    font-family: 'Poppins', Sans-Serif;
    background-color: #f2f2f2;
  }
`;

export default Global;
