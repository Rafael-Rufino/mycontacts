import styled from 'styled-components';

export const StyledLogo = styled.h1`
  font-size: 2.25rem;

  span{
    color: ${({ theme }) => theme.colors.primary.main};
  }

`;
