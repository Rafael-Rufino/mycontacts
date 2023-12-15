import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items:  center;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray.lighter}`};
  padding-bottom:  1rem;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
`;

export const ErrorContent = styled.div`
  margin-left: 1.5rem;

  strong{
    font-size: 1.375rem;
    display: block;
    color: ${({ theme }) => theme.colors.danger.main};
    margin-bottom: 8px;
  }

`;

export const Title = styled.strong`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.5rem;
`;

export const CommandLink = styled.a`
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }

`;

export const ListContainer = styled.div`
  margin-top: 1.5rem;

`;

export const ButtonContainer = styled.header`
  display: flex;
  width: 100px;
  justify-content: flex-start;
`;

export const EmptyListContainer = styled.div`
  display:  flex;
  flex-direction: column;
  margin-top: 1.5rem;
  align-items: center;

  p{
    font-size: 1.125rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.light};
    margin-top: 8px;
    max-width: 402px;

    strong{
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 1.125rem;
    }
  }
`;
