import styled, { css } from 'styled-components';

interface ContainerProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  height: 4.5rem;
  width: 100%;
  max-width: 350px;
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
    border-style: none;
    padding-left: 10px;
  }

`
