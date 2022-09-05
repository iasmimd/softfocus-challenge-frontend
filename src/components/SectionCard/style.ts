import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  max-width: 450px;
  height: 120px;
  display: flex;
  justify-content: space-evenly;

  div{
    display: flex;
    flex-direction: column;
  }

  title{
    font-size: 50px;
  }

  img{
    width: 70px;
    height: 70px;
  }
`;
