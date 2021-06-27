import styled from 'styled-components';

export const CreateRoomButton = styled.button`
  height: 50px;
  margin-top: 35px;
  padding: 0 25px;
  border: 0;
  border-radius: 8px;

  background: #EA4335;
  font-weight: 500;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  &:hover {
    background: #D92717;
  }
`
