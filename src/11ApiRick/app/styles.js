import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    img {
        border-radius: 100%;
    }
`;

export const Container2 = styled.div`
    img{
        border-radius: 100%;
    }
`;

export const Episodes = styled(Container)`
    grid-template-columns: repeat(4, 1fr);
`;

export const Ep = styled.div`
    border: 1px solid black;
`;