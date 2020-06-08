import styled from 'styled-components';

export const Compartment = styled.div`
    width: 10%;
    height: 5px;
    margin: 0 auto;
    border-radius: 25%;
    background-color: ${({ isWhite }) => isWhite ? '#bbb;' : '#777'};
`;