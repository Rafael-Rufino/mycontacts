import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;



  span{
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray.light};
    word-break: break-word;
  }
`;
