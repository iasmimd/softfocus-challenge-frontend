import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    img{
        height: 150px;
        width: 120px;
        align-self: center;
    }
`

export const Form = styled.form`
    height: 400px;
    width: 80%;
    max-width: 450px;
    border-radius: 5px;
    background-color: var(--primary-200);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-self: center;

    section{
        width: 80%;
    }

    span{
        height: 45px;
        width: 100%;
        background-color: var(--primary-300);
        font-size: 14px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .top-span{
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .bottom-span{
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button{
        color: var(--white);
        width: 100%;
    }
`