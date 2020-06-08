import styled from 'styled-components';

export default styled.div`
    overflow: hidden;
    position: relative;
    height: 100vh;
    ${({ theme, isWhite }) => isWhite ? `
        background-color: ${theme.colors.defaultBgc};
        color:  ${theme.colors.default};
    ` : `
        background-color: ${theme.colors.defaultBgcDark};
        color:  ${theme.colors.defaultDark};
    `};
    
    @media(min-width: 650px){
        position: absolute;
        top: 50%;
        left: 50%;
        width: 420px;
        height: 780px;
        padding: 0 10px;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 15px 0 cadetblue;
    }
`;