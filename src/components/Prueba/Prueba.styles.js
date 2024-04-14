import { styled, createGlobalStyle } from 'styled-components';
import font from './The Panorama.otf';
import { mobile } from '../../app/consts';


export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: myFont;
        src: url(${font});
    }
    body {
		background-color: salmon;
	}
`;

export const Rectangulo1 = styled.div`

    background-color: ${(props) => props.color};
    width: 500px;
    height: 200px;
    font-family: myFont;
    margin:auto;
    text-align: center;
    color: white;
    font-size: 1.5em;
	${mobile} {
		width:600px !important;
        height: 300px;
	}
`;

export const Rectangulo2 = styled(Rectangulo1)`
    width: 200px;
    background-color: blue;

    &:hover {
        background-color: paleGreen;
        width: 500px;  
    }
`;

