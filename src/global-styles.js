import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  .centered {
    text-align: center;
  }

  .card__size {
    display: flex;
    align-items: center;
    img {
      min-width: 350px;
    }
  }

.scrolling {
  box-shadow:0 1px 2px rgba(0,0,0,0.14);
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; 

  }

  body {
    background: #fff;
    font-family: 'Inter', sans-serif; 
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 15px -100px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 100px;
    }
  }

  pre[class*="language-"] {
    background: rgba(245, 245, 245, 1);
    color: rgb(65, 76, 94);  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
`
export default GlobalStyle
