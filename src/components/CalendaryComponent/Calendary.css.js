import styled from 'styled-components';

export const CalendaryContainer = styled.div`
    height: 60vh;
    @media(min-width: 650px){
        position: relative;
        width: 400px;
        height: 500px;
    }
`;

export const HeaderCalendaryContainer = styled.div`
    position: relative;
    height: 15vh;
    @media(min-width: 650px){
        position: relative;
        width: 400px;
        height: 100px;
    }
`;

export const MainCalendaryContainer = styled.div`
    height: 45vh;
    @media(min-width: 650px){
        position: relative;
        width: 400px;
        height: 400px;
    }
`;

export const H1 = styled.h1`
   position: absolute;
   margin: 0;
   top: 25%;
   left: 8%;
   font-size: 1.8rem;
`;

export const I = styled.i`
    position: absolute;
    top: 30%;
    ${({ dots }) => dots ? 'right: 8%; font-size: 1.7rem;' : 'right: 16%; font-size: 1.8rem;'}
    cursor: pointer;
`;

export const Days = styled.ul`
    padding: 0 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    list-style: none;
    border-bottom: 1px solid lightgray;
    justify-content: space-between;
`;

export const DayItem = styled.li`
    font-weight: 300;
    font-size: 11px;
`;

export const DayList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px 4px;

`;
