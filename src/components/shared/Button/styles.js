import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  color: #ffffff;
  border-radius: 4px;
  transition: background-color 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}

`;
