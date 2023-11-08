import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:  center;

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
