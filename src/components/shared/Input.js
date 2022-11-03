import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  border: none;
  background: #FFF;
  border: 2px solid #FFF;
  outline: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s ease-in;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;

  &:focus {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray.lighter};
    border-color: transparent;
    cursor: not-allowed;
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
