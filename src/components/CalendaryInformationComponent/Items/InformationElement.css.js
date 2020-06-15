import styled from 'styled-components';

export const ContainerInformation = styled.div`
    position: relative;
    height: 37vh;
    @media(min-width: 650px){
         height: 33%;
    }
`;

export const Information = styled.div`
    cursor: pointer;
    position: relative;
    width: 90%;
    min-height: 40px;
    margin: 20px auto;
    border-radius: 15px;
    border: 1px solid #ccc;
    background-color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.defaultBgc};` : `${theme.colors.defaultDarkBgc};`}

    h2{
        margin-left: 20px;
        line-height: 40px;
        font-weight: 400;
        font-size: 18px;
        background-color: transparent;
    }

    i{
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        font-size: 1.9rem;
        color: #d02f2f;
        transition: .3s;

        &:hover{
            transform-origin: 10% 10%;
            transform: rotate(-45deg);
            color: cadetblue;
        }
    }
`;

export const AddInformation = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 13vw;
    height: 13vw;
    background-color: ${({ isWhite, theme }) => isWhite ? theme.colors.defaultBgc : theme.colors.defaultBgcDark};
    border-radius: 50%;
    border: 1px solid #ccc;

    i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
        color: cadetblue;
        background-color: transparent;
    }

    @media(min-width: 650px)
    {
        right: 40px;
        width: 55px;
        height: 55px;
    }
`;

export const P = styled.div`
        margin: 0 0 10px 20px;
        display: inline-block;
        background-color: transparent;
        font-size: 1.3rem;
        opacity: 0.6;
        div{
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: cadetblue;
            display: inline-block;
            margin-right: 10px;
        }
`;

export const ConfirmAnswer = styled.div`
        position: absolute;
        z-index: 10000;
        top: 30%;
        left: 50%;
        width: 92%;
        height: 62%;
        cursor: default;
        transform: translate(-50%, -50%);
        background-color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.defaultBgc}` : `${theme.colors.defaultBgcDark}`};
        box-shadow: 0 0 5px lightgray;
        border-radius: 25px;

        h3{
            position: absolute;
            width: 100%;
            background-color: transparent;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.default}` : `${theme.colors.defaultDark}`};
            font-size: 20px;
            text-align: center;
        }

        .buttons{
            position: absolute;
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%);
            width: 60%;
            height: 50px;
            border-radius: 20px;
            background-color: ttransparent;

            .yes{
                transition: .5s;
                color: white;
                cursor: pointer;
                width: 40%;
                margin-right: 10%;
                height: 100%;
                background-color: darkgreen;
                border: none;
                border-radius: 25px;

                &:hover{
                    background-color: green;
                }
            }

            .no{
                transition: .5s;
                color: white;
                cursor: pointer;
                width: 40%;
                height: 100%;
                background-color: darkred;
                border: none;
                border-radius: 25px;

                &:hover{
                    background-color: red;
                }
            }

        }
`;

export const ShowDetalist = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    width: 92%;
    height: 62%;
    cursor: default;
    transform: translate(-50%, -50%);
    background-color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.defaultBgc}` : `${theme.colors.defaultBgcDark}`};
    box-shadow: 0 0 5px lightgray;
    border-radius: 25px;
    z-index: 1000;

    .fa-times-circle{
        position: absolute;
        cursor: pointer;
        top: 20px;
        right: 20px;
        color: cadetblue;
        font-size: 2rem;
        transition: .5s;

        &:hover{
            transform: rotate(360deg);
            color: red;
        }
        
    }

    h3{
        position: absolute;
        top: 5px;
        left: 20px;
        font-size: 1.5rem;
        letter-spacing: 1px;
        background-color: transparent;
        color: cadetblue;

        @media(max-height: 660px){
            font-size: 1.3rem;
        }
    }

    h4{
        position: absolute;
        top: 35px;
        left: 20px;
        font-size: 1.5rem;
        letter-spacing: 1px;
        background-color: transparent;
        color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.default}` : `${theme.colors.defaultDark}`};
        font-size: 16px;

        @media(max-height: 660px){
            font-size: 1.1rem;
        }
    }

    p{
        position: absolute;
        background-color: transparent;
        top: 55px;
        left: 20px;
        font-size: 1.2rem;

        b{
            background-color: transparent;
            font-size: 1.3rem;
        }

        i{
            margin-top: 20px;
            font-size: 1.7rem;
        }

        span{
            cursor: pointer;
            padding-left: 10px;
            font-size: 1.5rem;
            color: #bea541;

            @media(max-height: 660px){
               display: none;
            }
        }

        @media(max-height: 660px){
            .fa-user{
                display: none;
            }
         }
    }
`;