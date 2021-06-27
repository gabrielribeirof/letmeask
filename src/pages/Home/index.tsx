import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FiLogIn } from 'react-icons/fi'

import { database } from '../../services/firebase';

import { CreateRoomButton } from './styles';
import { DefaultContainer } from '../../components/DefaultContainer'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import googleIconImg from '../../assets/images/google-icon.svg'

export const Home = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    !user && await signInWithGoogle()

    user && history.push('rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (!roomCode.trim()) return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      return alert('Room does not exist')
    }

    if (roomRef.val().endedAt) {
      return alert('Room already closed')
    }

    history.push(`rooms/${roomCode}`)
  }

  return (
    <DefaultContainer>
      <CreateRoomButton onClick={handleCreateRoom}>
        <img src={googleIconImg} alt="Letmeask logo" />
        Create a room with a Google account
      </CreateRoomButton>

      <div className="separator">or join a room</div>

      <form onSubmit={handleJoinRoom}>
        <Input
          type="text"
          placeholder="Type a room code"
          onChange={event => setRoomCode(event.target.value)}
          value={roomCode}
        />

        <Button type="submit">
          <FiLogIn />
          Join the room
        </Button>
      </form>
    </DefaultContainer>
  )
}
