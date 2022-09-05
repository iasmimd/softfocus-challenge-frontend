import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  max-width: 350px;
  height: 130px;
  border-radius: 5px;
  border: 2px solid var(--primary-200);
  background-color: var(--white);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .farmer-name {
    font-size: 16px;
    font-weight: 900;
    padding-bottom: 8px;
  }

  :hover {
    cursor: pointer;
    transition: 1s;
    -webkit-box-shadow: 0px 9px 19px 6px rgba(138, 138, 138, 0.56);
    box-shadow: 0px 9px 19px 6px rgba(138, 138, 138, 0.56);
  }

  section {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
