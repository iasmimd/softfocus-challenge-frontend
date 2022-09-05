import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ul {
    width: 90%;
    height: 500px;
    margin-top: 20px;
    margin: 0 auto;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  li {
    margin-top: 15px;
    width: 90%;
    max-width: 300px;
  }

  img {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    ul {
      flex-wrap: wrap;
      overflow-y: scroll;
      flex-direction: row;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;

  input {
    height: 35px;
    border-radius: 5px;
    padding-left: 13px;
    border: 1px solid var(--primary-300);
  }
`;
