import styled from 'styled-components';

export const Container = styled.input`
  height: 50px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #A8A8B3;

  color: #29292E;
  transition: border-color 0.2s;

  &::placeholder {
    color: #A8A8B3;
    font-weight: 400;
  }

  &:not(:disabled):hover, &:not(:disabled):focus {
    border-color: #7E7E86;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
