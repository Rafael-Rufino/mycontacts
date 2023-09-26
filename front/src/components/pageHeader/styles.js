import styled from 'styled-components';

export const Container = styled.header`
  a{
    display: flex;
    align-items: center;
    gap:8px;
    text-decoration: none;
    font-weight: bold;
  }

`;

export const Icon = styled.button`
  background: transparent;
  border: none;
  color:  ${({ theme }) => theme.colors.primary.main};
`;

export const Name = styled.small`
  font-weight: bold;
  color:  ${({ theme }) => theme.colors.primary.main};
  font-size: 1.125rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;
