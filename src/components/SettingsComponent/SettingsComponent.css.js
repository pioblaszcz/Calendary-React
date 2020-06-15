import styled from 'styled-components';

export const Settings = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%; 
    background-color: ${({ theme, isWhite }) => isWhite ? theme.colors.defaultBgc : theme.colors.defaultBgcDark};
    transition: .7s;
    z-index: 100000000;

    ${({ showSettings }) => showSettings ? `
        transform: translateX(100%);
    ` : ''}

    .fa-times{
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 3rem;
        transition: .5s;

        &:hover{
            transform: rotate(360deg);
            color: ${({ isWhite }) => isWhite ? 'darkred' : 'red'};;
        }
    }

    h2{
        font-size: 2.2rem;
        position: absolute;
        top: 16px;
        left: 45px;
    }
`;

export const SettingsElement = styled.div`
    cursor: pointer;
    position: absolute;
    top: ${({ elementInQue }) => elementInQue ? `calc(${elementInQue} * 90px)` : '80px'};
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
    width: 250px;
    height: 80px;
    line-height: 80px;
    color: white;
    text-align: center;
    border-radius: 20px;
    background-color: ${({ isWhite }) => isWhite ? 'lightgray' : 'black'};
    box-shadow: 0 0 2px 0 black;
    transition: .4s;

    &:hover{
        color: #eee;
        background-color: #222;
        box-shadow: 0 0 2px 0 #eee;
    }

    @media(min-width: 650px)
    {
        width: 350px;
        height: 80px;
    }

`;

export const ConfirmElement = styled.div`
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 160px;
    border-radius: 20px;
    box-shadow: 0 0 5px 0 lightgray;

    @media (min-width: 650px){
        bottom: 25%;
        width: 340px;
        height: 200px;
    }

    h2{
        position: absolute;
        top: 15%;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
        color: #444;
    }

    .yes{
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 30px;
        width: 90px;
        height: 50px;
        color: white;
        background-color: darkred;
        border-radius: 30px;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        border: 4px solid darkred;
        transition: .2s;

        &:hover{
            background-color: transparent;
            color: gray;
        }

        @media(min-width: 650px){
            width: 120px;
            height: 64px;
            line-height: 60px;
        }
    }

    .no{
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 30px;
        width: 90px;
        height: 50px;
        color: white;
        background-color: darkgreen;
        border-radius: 30px;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        border: 4px solid darkgreen;
        transition: .2s;

        &:hover{
            background-color: transparent;
            color: gray;
        }

        @media(min-width: 650px){
            width: 120px;
            height: 64px;
            line-height: 60px;
        }
    }

`;