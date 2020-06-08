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

    div{
        position: absolute;
        top: 22%;
        right: 7%;
        z-index: 100;
        width: 150px;
        height: 100px;
        background-color: white;
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
                bottom: 12%;
                left: 10px;
                cursor: pointer;
                line-height: 2rem;
                font-weight: 400;

                a{
                    color: ${({ theme, isWhite }) => isWhite ? theme.colors.default : theme.colors.defaultDark};
                    font-size: 1.7rem;
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
