import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function Tags() {
  const [activeTag, setActiveTag] = useState(0);
  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <TagsContainer>
      {['Work', 'Short Break', 'Long Break'].map((tag, i) => (<Tag onClick={() => handleTagClick(i)} activeTag={activeTag === i} key={i}>{tag}</Tag>))}
    </TagsContainer>
  );
}

export default Tags;

const TagsContainer = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    height: 5rem;
    width: 40rem;
    margin: 0 auto;
    border-radius: 5rem;
    display: flex;
    gap: 1rem;
    align-items:center;
`;

const Tag = styled.button`
    all: unset;
    height: 4rem;
    text-align: center;
    border-radius: 5rem;
    flex: 1;
    font-size: 2rem;

    ${({ activeTag }) => activeTag && css`
    background: ${(props) => props.theme.colors.primary};
    `}

`;
