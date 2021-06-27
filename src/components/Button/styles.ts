import styled, { css } from 'styled-components';

type ContainerProps = {
  isOutlined: boolean
}

export const Container = styled.button<ContainerProps>`
  height: 50px;
  padding: 0 25px;
  border: 0;
  border-radius: 8px;

  background: #835AFD;
  font-weight: 500;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;
  cursor: pointer;

  svg {
    font-size: 20px;
    margin-right: 8px;
  }

  &:not(:disabled):hover, &:not(:disabled):focus {
    background: #6F4BD8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${props =>
    props.isOutlined &&
    css`
			background: #FFF;
      border: 1px solid #835AFD;
      color: #835AFD;
      transition: border, color 0.2s;

      &:not(:disabled):hover, &:not(:disabled):focus {
        border: 1px solid #6F4BD8;
        color: #6F4BD8;
			  background: #FFF;
      }
    `}
`;
