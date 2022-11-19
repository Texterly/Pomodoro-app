import React from 'react';
import styled from 'styled-components';

function Clock() {
  return (
    <ClockContainer>
      <TimerText>05:00</TimerText>
    </ClockContainer>
  );
}

export default Clock;

const ClockContainer = styled.div`

`;

const TimerText = styled.h3`
    font-size: 10rem;
`;
