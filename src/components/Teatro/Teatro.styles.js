import styled from 'styled-components';

export const P = styled.p`
    background-color: ${({ subrayar }) => subrayar ? '#1f1f1f' : 'transparent'};
    color: white;
`;
