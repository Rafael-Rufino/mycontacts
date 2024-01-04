import styled from 'styled-components';

export const ContainerSelect = styled.select`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 16px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s ease-in;
  appearance: none;


  &:focus{
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled]{
    background: ${({ theme }) => theme.colors.gray.lighter};
    border: 2px solid  ${({ theme }) => theme.colors.gray.light};
  }
`;
