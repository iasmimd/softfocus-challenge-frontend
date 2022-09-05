import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: transparent;
  height: 4.5rem;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;

  div{
    font-size: 14px;
    color: var(--black);
  }

  input {
    height: 35px;
    width: 100%;
    background-color: var(--white);
    border-radius: 5px;
    border: 1px solid var(--white);
    border-style: none;
    padding-left: 10px;
  }

  span{
    color: var(--red);
  }
`
