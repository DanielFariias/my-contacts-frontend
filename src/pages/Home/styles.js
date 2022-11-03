import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 50px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;

    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    /* filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.04)); */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => (theme.colors.gray.lighter)};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.4s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #ffffff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 16px;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    svg {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
    }
  }

`;

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px 8px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      margin-left: 8px;
    }

    a {

    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
    }

    button {
      margin-top: 16px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray.light};
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    max-width: 350px;
    color: ${({ theme }) => theme.colors.gray.light};
    margin-left: 24px;
    word-break: break-word;
  }
`;
