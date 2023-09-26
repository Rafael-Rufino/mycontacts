import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  & + & {
    margin-top: 1rem;
  }

`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  strong{
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.gray.main};
    text-transform: capitalize;
  }

  small{
    display: flex;
    gap: 4px;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.875rem;
    padding: 4px 6px;
    font-weight: bold;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary.main};
    background-color:  ${({ theme }) => theme.colors.primary.lighter};
  }
  `;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const WrapperDescrition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray.light};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  transition: all 0.2s ease-in;
`;

export const ButtonEdit = styled.a`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};

  &:hover{
    color: ${({ theme }) => theme.colors.primary.light};
    opacity: 0.9;
  }
`;

export const ButtonTrash = styled.button`
  background: transparent;
  border: none;

  color: ${({ theme }) => theme.colors.danger.dark};

  &:hover{
    color: ${({ theme }) => theme.colors.danger.light};
    opacity: 0.9;
  }

`;
