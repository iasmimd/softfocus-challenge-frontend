import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;  

  h1{
    text-align: center;
    font-size: 20px;
  }
`;

export const Form = styled.form`
  height: 660px;
  width: 80%;
  max-width: 450px;
  border-radius: 5px;
  background-color: var(--primary-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;

  .span-bottom {
     border-bottom-right-radius: 5px;
     border-bottom-left-radius: 5px;
     height: 45px;
     width: 100%;
     background-color: var(--primary-200);
     font-size: 16px;
     color: var(--white);
     display: flex;
     align-items: center;
     justify-content: center;
   }

  .inputs-form {
    width: 80%;
    padding-top: 20px;
  }

  .select-options{
    display: flex;
    flex-direction: column;
  }

  select{
    border-radius: 5px;
    height: 35px;
  }

  a{
    padding-left: 5px;
    color: var(--primary-300);
  }

  button {
    width: 100%;
    background-color: var(--primary-200);
    color: var(--white);
  }

  button:hover {
    background-color: var(--primary-100);
    transition: 0.9s;
    color: var(--black);
  }
`;
