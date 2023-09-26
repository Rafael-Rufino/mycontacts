import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  width: 100%;
  height: 210px;
  margin: 0 20px;

  @media (max-width: 520px) {
    padding: 18px;
  }

  @media (max-width: 375px) {
    height: 224px;
    padding: 12px;
  }

`;

export const Title = styled.h1`
  font-size: 1.375rem;
  color: ${({ theme, isDanger }) => (isDanger ? theme.colors.danger.main : theme.colors.gray.light)};
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray.light};
  margin-top: 16px;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: flex-end;
  align-items: center;

`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
