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

    body{
        background-color: var(--white);
        height: 100vh;
        font-family: 'Nunito', sans-serif;
    }

    button, svg{
        cursor: pointer;
        border-style: none;
    }

    .customModal {
        background: var(--primary-100);
        max-width: 450px;
        width: 90%;
        position: absolute;
    }

    a{
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 2px;
    }

::-webkit-scrollbar-thumb {
        background: #629460;
        border: 0px none #ffffff;
        border-radius: 0px;
    }

::-webkit-scrollbar-track {
        background: #ffffff;
        border: 0px none #ffffff;
        border-radius: 50px;
    }


`;
