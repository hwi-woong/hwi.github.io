import React from 'react';
import styled from 'styled-components';
import project1 from '../image/project1.png';
import Project2 from '../image/project2.png';


const Box = styled.div`
background-color: lightgray;
  padding: 20px;
  margin: 10px;
  border: 1px solid darkgray;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* Adjust the margin as needed */
`;

const Image = styled.img`
  width: 20%;
  height: 20%;
  margin: 0 10px; /* Adjust the margin as needed */
`;


function Project1() {
  return (
    <Box>
      <h1 style={{ fontSize: '2rem', marginBottom: '5px' }}>학습공동체</h1>
      <ImageContainer>
      <Image src={Project2} alt="react" />
        <p style={{ fontSize: '1rem', margin: '5px' }}>
        <li style={{ fontSize: '2rem' }}>React.js, Vue.js 스터디</li>
        <li style={{ fontSize: '2rem' }}>스터디와 함께 추가적인 프로젝트 진행</li></p>
        <Image src={project1} alt="react" />

      </ImageContainer>
    </Box>
  );
}

export default Project1;
