import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'
import { database } from '../services/firebase'

type FirebaseQuestions = Record<string, {
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean,
  likes: Record<string, {
    authorId: string
  }>
}>

type QuestionType = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
  likeCount: number
  likeId?: string
}

export const useRoom = (room_id: string) => {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<QuestionType[]>([])

  useEffect(() => {
    const roomRef = database.ref(`rooms/${room_id}`)

    roomRef.on('value', room => {
      const firebaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = firebaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isAnswered: value.isAnswered,
          isHighlighted: value.isHighlighted,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
        }
      })

      var result = parsedQuestions

      parsedQuestions.forEach((question, index) => {
        if (question.isHighlighted) {
          result.splice(index, 1)
          result.unshift(question)
        }

        if (question.isAnswered) {
          result.splice(index, 1)
          result.push(question)
        }
      })

      setTitle(firebaseRoom.title)
      setQuestions(result)
    })

    return () => {
      roomRef.off('value')
    }
  }, [room_id, user?.id])

  return {
    title,
    questions
  }
}