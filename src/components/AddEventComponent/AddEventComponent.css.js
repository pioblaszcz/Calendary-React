import styled from 'styled-components';

export const AddComponentContainer = styled.div`
    z-index: 20000;
    position: absolute;
    background-color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.defaultBgc}` : `${theme.colors.defaultBgcDark}`};
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    transition: .7s;
    z-index: 1000000;
    ${({ isAddClicked }) => isAddClicked ? `
        transform: translateX(-100%);
    ` : ''}

    i.fa-times{
        position: absolute;
        cursor: pointer;
        top: 20px;
        right: 20px;
        font-size: 32px;
    }

    
    i.fa-calendar-check{
        ${({ activeFiled }) => activeFiled === "Event" ? 'color: cadetblue;' : ''}
        position: absolute;
        cursor: pointer;
        top: 80px;
        right: 20px;
        font-size: 28px;
    }



    i.fa-star{
        ${({ activeFiled }) => activeFiled === "Counting" ? 'color: cadetblue;' : ''}
        position: absolute;
        cursor: pointer;
        top: 130px;
        right: 16px;
        font-size: 28px;
    }


    form{
        position: absolute;
        width: 85%;

        span{
            display: block;
            width: 100%;
            margin: -13px 0 7px 0;
            font-size: 14px;
            text-align: center;
            color: ${({ isWhite }) => isWhite ? `darkred;` : `red;`} 
        }

        input[name="description"]{
            display: block;
            width: 90%;
            height: 45px;
            margin: 20px auto 20px auto;
            border: none;
            border-radius: 20px;
            box-shadow: 0 0 4px 0 lightgray;
            background-color: transparent;
            font-size: 15px;
            padding-left: 10px;
            color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.default};` : `${theme.colors.defaultDark};`}  
        }

        input[name="time"]{
            display: block;
            width: 80%;
            height: 45px;
            margin: 20px auto 20px auto;
            border: none;
            border-radius: 20px;
            box-shadow: 0 0 4px 0 lightgray;
            background-color: transparent;
            font-size: 15px;
            padding-left: 10px;
            color: ${({ isWhite, theme }) => isWhite ? `${theme.colors.default};` : `${theme.colors.defaultDark};`}  
        }

        .descriptionLong{
            width: 80%;
            margin: 0 auto;

            label{
                display: block;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
                font-size: 1.4rem; 
            }

            textarea{
                display: block;
                min-width: 90%;
                max-width: 90%;
                margin: 0 auto;
                min-height: 150px;
                max-height: 150px;
                height: 100%;
                width: 100%;
                padding: 10px;
                border: none;
                box-shadow: 0 0 5px 0 lightgray;
                background-color: #eee;
            }
        }

        .buttons{
            width: 10%;
            margin: 50px auto;

            @media(max-height: 580px){
                display: flex;
                justify-content: space-between;
                width: 40%;
                margin-top: 20px;
            }

            button[type="submit"]{
                cursor: pointer;
                border: none;
                background-color: transparent;
                i{
                    font-size: 50px;
                    color: cadetblue;
                    transition: .5s;

                    &:hover{
                        color: darkgreen;
                    }
                }
            }

            button[type="button"]{
                cursor: pointer;
                margin-top: 50px;
                background-color: transparent;

                @media(max-height: 580px){
                  margin: 0;
                }

                i{
                    font-size: 50px;
                    color: ${({ isWhite }) => isWhite ? `black` : `white`};
                    transition: .5s;

                    &:hover{
                        transform: rotate(90deg)
                    }
                }
                border: none;
            }
        }

    }
`;


export const Div = styled.div`
width: 80%;
margin: 0 auto 10px auto;
padding-bottom: 10px;
border-bottom: 1px solid lightgray;

    label{
        font-size: 16px;
        padding-left: 10px;
        letter-spacing: 1px;

        @media(max-width: 350px)
        {
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: 10px;
        }
    }

    .checkboxTrue{
    display: inline-block;
    cursor: pointer;
    width: 50px;
    height: 25px;
    margin-left: 10%;
    margin-bottom: -8px;
    transition: .2s;
        p{
            border: 2px solid darkgreen;
            border-radius: 3px;
            line-height: 25px;
            font-size: 15px;
            padding-left: 13px;
            padding-top: 1px;
            transition: .2s;
            &:hover{
                background-color: darkgreen;
                color: #eee;
            }

            ${({ isAllDay }) => isAllDay ? `
            background-color: darkgreen;
            color: #eee;`: ''}
        }

        @media(max-width: 350px)
        {
            margin-left: 25%;
        }
    }

    .checkboxFalse{
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 25px;
        margin-left: 5%;
        margin-bottom: -8px;
        p{
            border: 2px solid darkred;
            border-radius: 3px;
            line-height: 25px;
            font-size: 15px;
            padding-top: 1px;
            padding-left: 13px;
            transition: .2s;
            &:hover{
                background-color: darkred;
                color: #eee;
            }

            ${({ isAllDay }) => !isAllDay ? `
            background-color: darkred;
            color: #eee;`: ''}
        }
    }

`;