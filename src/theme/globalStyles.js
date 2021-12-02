import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }

  :root{
    font-size: 16px;
  }

* {
    box-sizing: border-box;
    margin :0;
    padding: 0;
    font-family: ${(props) => props.theme.font.family.primary};
    
    /* @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 80%;
    } */
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 90%;
    }
  }

  body {
    background: url("/assets/bg-tile-2.png");
    color: ${(props) => props.theme.colors.text};
    /* height: 100vh;
    overflow-y: scroll; */
  }

  h1,h2,h3,h4{
    text-align: center;
  }
  h1{
    font-size: 3rem !important;
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

  .page-loader{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gold-highlight{
    color: ${(props) => props.theme.colors.primary.gold};
  }
  
  hr{
    border-color: ${(props) => `${props.theme.colors.primary.gold}75`};
  }


`;

export default GlobalStyle;
