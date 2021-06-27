import copyImg from '../../assets/images/copy.svg'

import { Container } from './styles'

type RoomCodeProps = {
  code: string
}

export const RoomCodeButton = (props: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>

      <span>Room {props.code}</span>
    </Container>
  )
}