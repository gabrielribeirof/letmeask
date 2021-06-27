import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #FFF;
  border: 1px solid #835AFC;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    background: #835AFC;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s;
  }

  span {
    width: 230px;
    display: flex;
    flex: 1;
    align-self: center;
    padding: 0 16px 0 12px;
    font-size: 12px;
    font-weight: 500;
  }

  &:hover {
    div {
      background: #6F4BD8;
    }
  }
`;
