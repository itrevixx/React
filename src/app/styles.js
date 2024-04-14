import { createGlobalStyle } from 'styled-components';
import font from '../assets/Fonts/batmfa__.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: myFont;
        src: url(${font});
    }
    body{
        background: teal;
        color: white;
    }

`;
export default GlobalStyle;

