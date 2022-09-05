import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  max-width: 450px;
  height: 130px;
  border-radius: 5px;
  border: 2px solid var(--primary-200);
  background-color: var(--primary-100);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    cursor: pointer;
    transition: 1s;
    -webkit-box-shadow: 0px 9px 19px 6px rgba(138, 138, 138, 0.56);
    box-shadow: 0px 9px 19px 6px rgba(138, 138, 138, 0.56);
  }

  div {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
    padding-bottom: 8px;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;
