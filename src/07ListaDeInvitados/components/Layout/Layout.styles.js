
import styled from 'styled-components';

export const LayoutStyle = styled.div`
    a{
        text-decoration: none;
        color: white;
        font-family: myFont;
        
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    button{
        border-radius: 10px;
        color: white;
        background-color: orange;
        box-shadow: 4px 4px 10px red;
        cursor: pointer;
    }
    p{
        font-family: myFont;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
        font-size: 2rem;
        border: 1px solid red;
        box-shadow: 0 0 40px red;
        
    }
    
`;