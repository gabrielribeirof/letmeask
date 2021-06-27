import React from 'react';

import { Container } from './styles';

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

export const DefaultContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer your audience's questions in real time</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />

          {children}
        </div>
      </main>
    </Container>
  );
}
