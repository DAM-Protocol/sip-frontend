import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}


* {
    box-sizing: border-box;
    margin :0;
    padding: 0;
    font-family: ${(props) => props.theme.font.family.primary};
    font-size: 16px;
    
    /* @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 80%;
    } */
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 90%;
    }
  }

  body {
    background: url("./assets/bg-tile-2.png");
    color: ${(props) => props.theme.colors.text};
    height: 100vh;
    overflow-y: scroll;
  }

  h1,h2,h3,h4{
    text-align: center;
  }
  h1{
    font-size: 3rem;
    font-weight: 500;
  }
  h2{
    font-size: 2.5rem;
    font-weight: 600;
  }
  h3{
    font-weight: 500;
    font-size: 1.5rem;
  }
  h4{
    font-size: 1.2rem;
    font-weight: 400;
  }
  a, a:visited{
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }

`;

export default GlobalStyle;
