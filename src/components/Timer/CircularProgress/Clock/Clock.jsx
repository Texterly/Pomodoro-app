import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../../StateProvider';

function Clock() {
  const {
    time,
    setTime,
    isActive,
    setIsActive,
  } = useContext(StateContext);
  useEffect(() => {
    if (isActive && time > 0) {
      const inteval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(inteval);
    }
  }, [time, isActive]);

  const toggleClock = () => {
    setIsActive(!isActive);
  };

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>
        {isActive ? 'Pause' : 'Start'}
      </StartPauseButton>
    </ClockContainer>
  );
}

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;

const TimerText = styled.h3`
    font-size: 10rem;
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`;
