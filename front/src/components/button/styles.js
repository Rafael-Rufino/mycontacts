import styled from 'styled-components';

export const ContainerButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  border: none;
  font-weight: bold;
  transition: all 0.2s ease-in;
  border-radius: 4px;
  font-size: 1rem;
  padding: 4px 16px;
  justify-content: center;


    ${({ variant, theme, color }) => {
    if (variant === 'primary') {
      return `
        height: 52px;
        box-shadow:  0px 4px 10px rgba(0, 0, 0, 0.04);
        background-color:  ${color ? theme.colors[color].main : theme.colors.primary.main};
        color: white;

        &:hover {
          background-color:  ${color ? theme.colors[color].light : theme.colors.primary.light};
          opacity: 0.9;
        }

        &:active {
          background-color:  ${color ? theme.colors[color].dark : theme.colors.primary.dark};
        }

        &[disabled]{
          background: #ccc;
          cursor: default;
        }

      `;
    }

    if (variant === 'link') {
      return `
      background: transparent;
        color:  ${color ? theme.colors[color].lighter : theme.colors.primary.main};
        &:hover {
          color:  ${color ? theme.colors[color].light : theme.colors.primary.light};
          opacity: 0.8;
        }
      `;
    }

    if (variant === 'outline') {
      return `
        background: transparent;
        color: ${theme.colors.primary.main};
        border: 2px solid ${theme.colors.primary.main};
        &:hover {
          background-color: ${theme.colors.primary.light};
          border-color: ${theme.colors.primary.light};
        }
      `;
    }
    return '';
  }}

`;

export const IconButton = styled.span``;

export const TextButton = styled.span`
  font-size: 1.125rem;
`;
