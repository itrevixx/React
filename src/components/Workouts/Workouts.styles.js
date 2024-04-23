import styled from 'styled-components';
import flecha from '../../assets/img/flecha.png'

export const Container = styled.div`
    width: 1400px;
    margin: auto;
    font-size: 2rem;
    font-family: myFont;
`;

export const Menu = styled.div`
    display: flex;
    p{
        margin-top: 5px;
    }
`;

export const Row = styled.div`
    display: flex;
`;

export const Left = styled.div`
    width: 700px;
    img{
        width: 650px;
        height: 650px;
        border-radius: 40px;
        padding:10px;
    }
`;

export const Right = styled.div`
display: flex;
flex-wrap: wrap;

width: 700px;
    img{
    width: 300px;
    height: 300px;
    cursor: pointer;
    margin: 10px;
    }
`;

export const Img = styled.img`
    border-radius: 20px;
    border: ${({ active }) => active ? '4px solid red' : '4px solid transparent'}
`;

export const ButtonLeft = styled.span`
    display: inline-block;
    cursor: pointer;
    background-image: url(${flecha});
    background-size: 100% 100%;
    width: 40px;
    height: 40px;
    margin: 0px 10px;
    
`;

export const ButtonRight = styled(ButtonLeft)`
    transform: rotate(180deg);
`;
