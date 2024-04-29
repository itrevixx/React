import { createGlobalStyle } from 'styled-components';
import font from '../assets/Fonts/batmfa__.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: myFont;
        src: url(${font});
    }
    /* body{
        background: #09051A;  //teal -> el color anterior
        color: white;
    } */
`;
export default GlobalStyle;

