import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .analyst-area {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .analyst-functions {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .page-description {
    width: 90%;
    max-width: 450px;
  }

  .page-description > h1 {
    padding-bottom: 10px;
  }

  .nature-image {
    width: 300px;
    height: 150px;
  }

  @media (min-width: 1024px) {
    .analyst-area {
      flex-direction: row;
      justify-content: space-evenly;
    }

    .nature-image {
      width: 500px;
      height: 350px;
    }
  }
`;
