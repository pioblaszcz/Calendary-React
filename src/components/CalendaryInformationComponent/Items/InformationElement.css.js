import styled from 'styled-components';

export const Information = styled.div`
    cursor: pointer;
    position: relative;
    width: 90%;
    min-height: 40px;
    margin: 20px auto;
    border-radius: 15px;
    border: 1px solid #ccc;
    background-color: white;

    h2{
        position: absolute;
        left: 20px;
        top: 50%;
        font-weight: 400;
        font-size: 16px;
        transform: translateY(-50%);
        background-color: transparent;
    }
`;

export const AddInformation = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 13vw;
    height: 13vw;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #ccc;

    i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
        color: cadetblue;
    }

    @media(min-width: 650px)
    {
        right: 40px;
        width: 55px;
        height: 55px;
    }
`;