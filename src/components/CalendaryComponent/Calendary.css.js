import styled from 'styled-components';

export const CalendaryContainer = styled.div`
    height: 60vh;
    z-index: 1000000;
    position: relative;

    @media(min-width: 650px){
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

    div{
        position: absolute;
        top: 22%;
        right: 7%;
        z-index: 10000000;
        width: 150px;
        height: 130px;
        background-color: ${({ isWhite, theme }) => isWhite ? theme.colors.defaultBgc : theme.colors.defaultBgcDark};
        border-radius: 20px;
        box-shadow: 0 0 10px lightgray;

        .fa-times{
            position: absolute;
            top: 6px;
            right: 15px;
            cursor: pointer;
            font-size: 20px;
            color: cadetblue;
            transition: .4s;

            &:hover{
                transform: scale(1.2) rotate(180deg);
            }
        }

            .first{
                position: absolute;
                width: 90%;
                left: 10px;
                bottom: 45%;
                cursor: pointer;
                line-height: 2rem;
                font-size: 1.4rem;
                font-weight: 400;
                transition: 1s;
                padding-bottom: 8px;
                border-bottom: 1px solid lightgray;

                &:hover > .fa-cog{
                    transform: rotate(360deg);
                }

                .fa-cog{
                    margin-right: 10px;
                    font-size: 1.7rem;
                    transition: .4s;
                }
            }

            .second{
                position: absolute;
                bottom: 20%;
                left: 10px;
                cursor: pointer;
                line-height: 2rem;
                font-weight: 400;

                a{
                    color: ${({ theme, isWhite }) => isWhite ? theme.colors.default : theme.colors.defaultDark};
                    padding-left: 5px;
                    font-size: 1.5rem;
                }

                &:hover > .fa-user{
                    color: cadetblue;
                }

                .fa-user{
                    padding-right: 10px;
                    font-size: 1.7rem;
                    transition: .3s;
                }
            }
    }

`;

export const MainCalendaryContainer = styled.div`
    height: 45vh;
    display: flex;
    justify-content: space-evenly;
    width: 1200vw;
    transition: .7s;

    transform: translateX${({ moveLeft, moveRight, move }) => moveLeft ? `(-${moveLeft.var}%)` : moveRight ? `(-${moveRight.var}%)` : `(-${move}%)`};
    @media(min-width: 650px){
        width: 5200px;
        height: 400px;
    }

`;

export const H1 = styled.h1`
   position: absolute;
   margin: 0;
   top: 25%;
   left: 5%;
   font-size: 1.8rem;

   i.arrowFirst{
    cursor: pointer;
    padding-right: 10px;
    font-size: 2rem;
    transform: rotate(-90deg) translateX(5px);
   }

   i.arrowSecond{
    cursor: pointer;
    padding-left: 7px;
    font-size: 2rem;
    transform: rotate(90deg) translateX(-2px);
   }
`;

export const I = styled.i`
    display: block;
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
    justify-content: space-around;
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
    flex-basis: 100%;
    height: 100%;
    z-index: 10000000000;
    padding: 10px 5px;
    @media(min-width: 640px){
     margin-right: 30px;
     flex-basis: 400px;
    }
`;

export const BackToActiveDay = styled.div`
    cursor: pointer;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 16px;
    right: 22%;
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    background-color: cadetblue;

    @media(min-width: 650px){
        bottom: 18px;
        right: 120px;
        width: 55px;
        height: 55px;
    }

    p{
        color: white;
        font-size: 1.4rem;
    }
`;