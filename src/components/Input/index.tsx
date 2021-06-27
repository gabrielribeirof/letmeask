import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}
