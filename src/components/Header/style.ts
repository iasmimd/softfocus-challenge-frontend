import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    padding: 10px 20px 10px 20px;
    background-color: var(--primary-200);
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button{
        width: 120px;
        height: 40px;
        margin-left: 10px;
        font-size: 14px;
    }

    button:hover{
        background-color: var(--primary-100);
        transition: 0.9s;
    }
`