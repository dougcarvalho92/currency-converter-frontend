import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Ubuntu, Helvetica, Sans-Serif;
  }
  #root{
    max-width: 1280px;
    justify-content: center;
    align-items:center;
    color: #fff;
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    input, select{
      border:none;
      outline:none;
      height: 42px;
      line-height: 40px;
      margin-bottom: 20px;
      border-radius: 30px;
      width: 100%;
      padding: 11px 20px;
      flex: 1;
    }
    input + input{
      margin-top: 20px;
    }
  }
`;

export default GlobalStyle;
