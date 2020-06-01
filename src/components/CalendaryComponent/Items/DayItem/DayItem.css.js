import styled from 'styled-components';

export const Day = styled.li`
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-basis: 13vw;
    height: 13vw;
    list-style: none;
    font-size: 1.5rem;
    ${({ isActive }) => isActive ? 'color: #222;' : 'color: #bbb;'}
    ${({ isFocus }) => isFocus ?
        `
        color: white;
        background-color: cadetblue;
        border-radius: 50%;
        ` : ''}
        @media(min-width: 650px)
    {
        flex-basis: 55px;
        height: 55px;
    }
`;

export const Dott = styled.div`
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background-color: #555;
    border-radius: 50%;
    ${({ isFocus }) => isFocus ? `background-color: white;` : ''}

    @media(min-width: 650px)
    {
        top: 7px;
    }
`;