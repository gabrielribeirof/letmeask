import { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import { DefaultContainer } from '../../components/DefaultContainer'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export const NewRoom = () => {
  const history = useHistory()
  const { user } = useAuth()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (!newRoom.trim()) return

    const roomRef = database.ref('rooms')

    try {
      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id
      })
  
      history.push(`/rooms/${firebaseRoom.key}`)
    } catch (error) {
      alert('Error when try to create the rrom')
    }
  }

  return (
    <DefaultContainer>
      <h2>Create a new room</h2>

      <form onSubmit={handleCreateRoom}>
        <Input
          type="text"
          placeholder="Room name"
          onChange={event => setNewRoom(event.target.value)}
          value={newRoom}
        />

        <Button type="submit">Create</Button>
      </form>

      <p>Do you have a room code? <Link to="/">Click here</Link></p>
    </DefaultContainer>
  )
}
