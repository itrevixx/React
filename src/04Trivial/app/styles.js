import styled from "styled-components";

// Contenedor principal
export const Container = styled.div`
    max-width: 1024px;
    margin: auto;
    padding: 20px;
`;

// Fila que contiene Left y Right
export const Row = styled.div`
    display: flex;
    margin-top: 20px;
`;

// Columna izquierda
export const Left = styled.div`
    width: 200px;
`;

// Columna derecha
export const Right = styled.div`
    width: 400px;

    img {
        width: 200px;
        height: 200px;
    }
`;