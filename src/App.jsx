import React from 'react';
import styled from 'styled-components';
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <>
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;
