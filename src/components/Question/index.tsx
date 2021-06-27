import { Container } from './styles'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  isLiked: boolean
  isAnswered: boolean
  isHighlighted: boolean
}

export const Question: React.FC<QuestionProps> = ({
  children,
  content,
  author,
  isLiked,
  isAnswered,
  isHighlighted
}) => {
  return (
    <Container
      isLiked={isLiked}
      isAnswered={isAnswered}
      isHighlighted={isHighlighted}
    >
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />

          <span>{author.name}</span>
        </div>

        <div>
          {children}
        </div>
      </footer>
    </Container>
  )
}