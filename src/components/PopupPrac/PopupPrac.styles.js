import styled from 'styled-components';

export const Overlay = styled.div`
    display: ${({ visible }) => visible ? 'flex' : 'none'};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.9);
`;

export const Content = styled.div`
    background-color: darkorange;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 20px yellowgreen;
    h3{
        font-family: myFont;
    }
`;
