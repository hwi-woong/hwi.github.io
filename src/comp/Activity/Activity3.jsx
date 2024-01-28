import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: lightgray;
  padding: 20px;
  margin: 10px;
  border: 3px blue;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column; /* Display the items in a column layout */
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
`;
const NotionLink = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 25px; 
`;

function Activity3() {
  return (
    <Box>
      <ImageContainer>
      <h1 style={{ fontSize: '2rem', marginBottom: '5px' }}>IT학회</h1>
        <Image src="image/act-3.png" alt="react" style={{ width: '30%', height: '30%' }}/>
        
        <ul>
          <li style={{ fontSize: '2rem' }}>자바스크립트, 리액트 스터디</li>
        </ul>
      </ImageContainer>
      <img src="image/act3-1.png" alt="학회" style={{ width: '60%', height: '100%' }} />
      <NotionLink href="https://aluminum-gaura-474.notion.site/React-f15da57b3bad44b9b2daf13502ee89f8?pvs=4" target="_blank" rel="noopener noreferrer">
      <li style={{ fontSize: '2rem' }}>일기장 만들기 미니 프로젝트(클릭!)</li>
      
      </NotionLink>
    </Box>
  );
}

export default Activity3;
