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
    cursor: pointer;
    position: absolute;
    width: 13vw;
    height: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    border-radius: 50%;
    transition: 1s;
    z-index: 10000;
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
    
    ${({ isFixed }) => isFixed ? 'display: none;' : ''}

    ${({ animationActive, activeDayNumber, moveHeight }) => animationActive ? `
        transform: translate(calc(63vw - ${activeDayNumber}px), calc(71.4vh - ${moveHeight} * 13vw - ${moveHeight} * -5px));

        @media(max-height: 820px){
            transform: translate(calc(63vw - ${activeDayNumber}px), calc(71.4vh - ${moveHeight} * 13vw));
        }

        @media (max-height: 670px){
            transform: translate(calc(63vw - ${activeDayNumber}px), calc(72.2vh - ${moveHeight} * 13vw - ${moveHeight} * -5px));
        }

        @media(min-width: 650px)
        {
            transform: translate(calc(230px - ${activeDayNumber}px), calc(585px - ${moveHeight} * 55px - 20px));
        }

        @media (max-width: 416px) and (max-height: 740px)
        {
            transform: translate(calc(63vw - ${activeDayNumber}px), calc(71.4vh - ${moveHeight} * 13vw - ${moveHeight} * -7px));
        }

        @media (max-width: 375px) and (max-height: 670px)
        {
            transform: translate(calc(63vw - ${activeDayNumber}px), calc(72.2vh - ${moveHeight} * 13vw - ${moveHeight} * -5px));
        }

        @media (max-width: 360px) and (max-height: 740px)
        {
            transform: translate(calc(63vw - ${activeDayNumber}px), calc(72.2vh - ${moveHeight} * 13vw));
        }

        @media (max-width: 360px) and (max-height: 640px)
        {
            transform: translate(calc(63vw - ${activeDayNumber}px), calc(72.2vh - ${moveHeight} * 13vw - ${moveHeight} * -5px));
        }

        @media (max-width: 320px) and (max-height: 600px)
        {
            transform: translate(calc(65vw - ${activeDayNumber}px), calc(72.2vh - ${moveHeight} * 13vw - ${moveHeight} * -5px));
        }

    ` : ''}
`;
