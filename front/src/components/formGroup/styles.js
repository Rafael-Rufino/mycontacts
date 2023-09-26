import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

export const Error = styled.small`
  color: ${({ theme }) => theme.colors.danger.main};
  font-size: 0.75rem;
  margin-top: 8px;
  display: block;
`;
