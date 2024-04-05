import styled from "styled-components";


/* export const Box = styled.div`
    display: flex;
    margin: auto;
    width: fit-content;
    background-color: ${(props) => props.color};
    
    .cuadrado {
    width: 100px;
    height: 100px;
    background-color: orange;
    align-items: center;
    display: flex;
    justify-content: center;
    color: white;
    margin: ${(props) => props.m}px;
    
    } 
    span {
        font-weight: bold;
        font-size: 6em;
    }
`; */
//-------------------------------------------------------------------------------------------------------------------
/* 
export const MyStyledComponent = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${({ color }) => color ? 'yellow' : 'red'};

`; */
export const Back = styled.div`
    display: ${({ visible }) => visible ? 'block' : 'none'};
    
    div{
        background-color: gray;
        width: 300px;
        height: 300px;
    }
`