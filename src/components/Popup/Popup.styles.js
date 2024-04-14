import styled from 'styled-components';

export const Container = styled.div`
    display: ${({ visible }) => visible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

export const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.9);
position: fixed;
width: 100%;
height: 100vh;
left: 0;
top: 0;
`;

export const Content = styled.div`
background-color: white;
border-radius: 20px;
padding: 20px;
color: black;
position: relative;
box-shadow: 0 0 25px rgba(255, 175, 0, 1);
`;