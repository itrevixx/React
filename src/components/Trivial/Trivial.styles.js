import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;
    margin: auto;
    font-size: 1rem;
    font-family: myFont;
`;
export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    img{
        width: 100%;
    }
`;
export const Question = styled.p`
text-align: center;
padding: 50px;
`;

export const Popup = styled.div`
    position: fixed;
`;

