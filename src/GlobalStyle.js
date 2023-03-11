import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      box-sizing: border-box;
      color: black;
      list-style-type: none;
    }
    a{
      text-decoration: none;
      color: black;
    }
`

export default GlobalStyle;