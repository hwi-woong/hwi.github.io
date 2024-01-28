  import React from 'react';
  import styled from 'styled-components';
  
  const Box = styled.div`
    background-color: pink;
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
  `;
  
  const Image = styled.img`
    width: 30%;
    height: auto;
  `;
  
  function Activity1() {
    return (
      <Box>
        <h1 style={{ fontSize: '2rem', marginBottom: '5px' }}>교육봉사</h1>
        <ImageContainer>
          <Image src="image/activity4.png" alt="react" />
          <p style={{ fontSize: '1rem', margin: '5px' }}>
          <li style={{ fontSize: '2rem' }}>경계 장애 학생들 대상 봉사</li>
          <li style={{ fontSize: '2rem' }}>교육 컨텐츠 제작</li></p>
          <Image src="image/activity4-1.png" alt="react" />
        </ImageContainer>
      </Box>
    );
  }
  
  export default Activity1;
