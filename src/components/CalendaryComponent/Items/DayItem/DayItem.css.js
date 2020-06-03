import styled from 'styled-components';

export const Day = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-basis: 13vw;
    height: 13vw;
    list-style: none;
    font-size: 1.5rem;
    ${({ isActive }) => isActive ? 'color: #222;' : 'color: #bbb;'}
    ${({ isFocus, dayActive }) => isFocus && !dayActive ?
        `
    border: 1px solid #aaa;
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
    z-index: 10000;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background-color: #555;
    border-radius: 50%;
    ${({ dayActive, isFocus }) => dayActive && isFocus ? `background-color: white;` : ''}

    @media(min-width: 650px)
    {
        top: 7px;
    }
`;

export const DayInside = styled.div`
    position: absolute;
    width: 13vw;
    height: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    border-radius: 50%;
    transition: 1s;
    z-index: 100;
    p{
        font-size: 1.5rem;
        color: white;
        background-color: transparent;
    }
    @media(min-width: 650px)
    {
        width: 55px;
        height: 55px;
    }
    ${({ animationActive }) => animationActive ? `
        transform: translate(36vw, 74vh);

        @media(max-height: 740px)
        {
            transform: translate(36vw, 73.5vh);
        }

        @media(max-height: 736px)
        {
            transform: translate(36vw, 72.8vh);
        }

        @media(max-height: 667px)
        {
            transform: translate(36vw, 72.6vh);
        }

        @media(max-height: 580px)
        {
            transform: translate(36vw, 72vh);
        }

        @media(min-width: 650px)
        {
            transform: translate(120px, 585px);
        }
    ` : ''}
`;
