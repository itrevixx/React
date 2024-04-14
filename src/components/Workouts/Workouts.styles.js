import styled from 'styled-components';
import flecha from '../../assets/img/flecha.png'

export const Container = styled.div`
    width: 1400px;
    margin: auto;
    font-size: 2rem;
    font-family: myFont;
    .rotated{
        transform: rotate(180deg);
    }
`;

export const Row = styled.div`
    display: flex;
`;
export const Left = styled.div`
    width: 700px;
    img{
        width: 650px;
        height: 600px;
        border-radius: 40px;
        padding:20px;
    }
`;

export const Images = styled.div`
display: flex;
flex-wrap: wrap;

width: 700px;
    img{
    width: 300px;
    height: 300px;
    cursor: pointer;
    margin: 10px;
    border-radius: 25px;
    }
`;

export const ButtonLeft = styled.span`
    display: inline-block;
    cursor: pointer;
    background-image: url(${flecha});
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
`;

export const ButtonRight = styled(ButtonLeft)`
    transform: rotate(180deg);
`;
