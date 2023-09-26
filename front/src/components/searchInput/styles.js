import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input{
    width: 100%;
    border-radius: 24px;
    background:  #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    border: none;
    height: 50px;
    outline: 0;
    padding: 0 1rem;
    &::placeholder{
      color: #BCBCBC;
    }
  }
`;
