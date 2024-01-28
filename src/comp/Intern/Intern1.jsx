import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: lightgray;
  padding: 10px;
  margin: 3%;
  border: 3px solid red; /* 수정된 부분 */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 10); /* 수정된 부분 */
  border-radius: 10%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none; /* 수정된 부분 */
  padding: 10px; /* 수정된 부분 */
`;

const Image = styled.img`
  width: 30%;
  height: 30%;
`;

function Intern1() {
  return (
    <Box>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>두산베어스</h1>
      <ImageContainer>
        <Image src="image/doosan.png" alt="react" />
        <p style={{ fontSize: '2rem', margin: '10px' }}> 
          <li style={{ fontSize: '1.5rem' }}>은퇴식 보조 등 구단 이벤트 지원</li>
          <li style={{ fontSize: '1.5rem' }}>야구장 안내데스크 지원</li>
          <li style={{ fontSize: '1.5rem' }}>구단 SNS 게시물 기획 및 제작</li>
          <li style={{ fontSize: '1.5rem' }}>구단 유튜브 컨텐츠 제작 지원</li>
        </p>
        <Image src="image/doosan2.png" alt="react" />
      </ImageContainer>
    </Box>
  );
}

export default Intern1;
