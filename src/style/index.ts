import { createGlobalStyle } from "styled-components";

export const colors = {
  bgColor: '#FFF8F2',
  white: '#FFF',
  colorDark: '#E66767',
  colorWhite: '#FFEBD9',
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none; 
  } 
  
  body {
    background: ${colors.bgColor};
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    .center {
      display: flex;
      justify-content: center;
    }
  }
`

export default GlobalStyle