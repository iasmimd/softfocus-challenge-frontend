import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .logo {
    text-align: center;
    padding-top: 60px;
  }

  img {
    height: 100px;
    width: 120px;
    align-self: center;
  }
`;

export const Form = styled.form`
  height: 400px;
  width: 80%;
  max-width: 450px;
  border-radius: 5px;
  margin-bottom: 70px;
  background-color: var(--primary-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;

  .top-span,
  .bottom-span {
    height: 45px;
    width: 100%;
    background-color: var(--primary-300);
    font-size: 14px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-span {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .bottom-span {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  section {
    width: 80%;
  }

  a{
    padding-left: 5px;
  }

  button {
    color: var(--white);
    width: 100%;
  }

  button:hover {
    background-color: var(--primary-100);
    transition: 0.9s;
    color: var(--black);
  }
`;
