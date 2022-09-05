import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
    }

    :root{
        --white: #fcfff7;
        --primary-100: #bbdbb4;
        --primary-200: #96be8c;
        --primary-300: #629460;
        --secondary-100: #222823;
        --black: #08090a;
        --gray: #575A5E;
        --red: #FC2F00;
    }

    input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border-style: none;
    outline: 0;
    } 

    body{
        background-color: var(--white);
        height: 100vh;
    }

    button, svg{
        cursor: pointer;
        border-style: none;
    }

    a{
        text-decoration: none;
    }

`;
