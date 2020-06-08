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
    ${({ isActive, theme, isWhite }) => isWhite
        ? isActive
            ? `color: ${theme.colors.defaultDayColor};`
            : `color: ${theme.colors.defaultDayunactiveColor};`
        : isActive
            ? `color: ${theme.colors.defaultDark};`
            : `color: ${theme.colors.defaultDayunactiveDarkColor};`
    }
    ${({ dayActive, }) => dayActive ? 'color: cadetblue;' : ''}
    ${({ isFocus, dayActive, isWhite }) => isFocus && !dayActive ?
        `
        border: 1px solid ${isWhite ? `#aaa;` : `#ddd;`};
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
    background-color: ${({ isWhite }) => isWhite ? `#555;` : `#aaa;`};
    border-radius: 50%;
    ${({ dayActive, isFocus }) => dayActive && isFocus ? `background-color: white;` : ''}
    ${({ dayActive, isFocus }) => dayActive && !isFocus ? `background-color: cadetblue;` : ''}
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
    ${({ animationActive, activeDayNumber, moveHeight }) => animationActive ? `
        transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw ));

        // @media(min-width: 300px) and (max-height: 570px){
        //     transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw + 18px));
        // }

        // @media (min-width: 350px) and (max-height: 750px)
        // {
        //     transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw - 7px));
        // }

        // @media(min-width: 350px) and (max-height: 650px){
        //     transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw + 22px));
        // }

        // @media (min-width: 370px) and (max-height: 840px)
        // {
        //     transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw - 16px));
        // }

        // @media (min-width: 370px) and (max-height: 680px)
        // {
        //     transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw + 22px));
        // }

        // @media (min-width: 400px) and (max-height: 740px)
        // {
        //     transform: translate(calc(62vw - ${activeDayNumber}px), calc(73.5vh - ${moveHeight} * 13vw + 28px));
        // }


        // @media(max-height: 580px)
        // {
        //     transform: translate(calc(62vw - ${activeDayNumber}px + 18px), calc(72vh - ${moveHeight} * 13vw - 7px));
        // }

        @media(min-width: 650px)
        {
            transform: translate(calc(230px - ${activeDayNumber}px), calc(585px - ${moveHeight} * 55px - 20px));
        }
    ` : ''}
`;
