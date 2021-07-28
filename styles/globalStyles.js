// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;

   hr{
    height: 1px;
    background: #d0d0d0 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
  }
}

`;

export default GlobalStyle;
