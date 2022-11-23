import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';
import Modal from './components/Modal/Modal';
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';

function App() {
  const [isOPen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Modal isOPen={isOPen} onClose={onClose} />
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
      <CogIcon onClick={onOpen}>
        <FaCog />
      </CogIcon>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
