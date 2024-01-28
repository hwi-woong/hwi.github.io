import React from 'react';
import styled from 'styled-components';
import Project4 from '../image/project4.png';
import Project5 from '../image/project5.png';

const Box = styled.div`
  background-color: orange;
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
  margin: 0 10px; /* Adjust the margin as needed */
`;

const LinksContainer = styled.div`
  margin-top: 10px;
`;

const GitHubLink = styled.a`
  margin-right: 20px;
  font-size: 2.2rem;
  color: blue;
  text-decoration: none;
`;

const WebsiteLink = styled.a`
  font-size: 2.2rem;
  color: green;
  text-decoration: none;
`;

function Project2() {
  return (
    <Box>
      <h1 style={{ fontSize: '2rem', marginBottom: '5px' }}>연합프로젝트</h1>
      <ImageContainer>
        <Image src={Project4} alt="react" />
        <p style={{ fontSize: '1rem', margin: '5px' }}>
          <li style={{ fontSize: '2rem' }}>프로젝트 기획</li>
          <li style={{ fontSize: '2rem' }}>프론트엔드 담당</li>
        </p>
        <Image src={Project5} alt="react" />
      </ImageContainer>
      <LinksContainer>
        <GitHubLink href="https://github.com/TAVE-balak/OTTify-frontend" target="_blank">
          GitHub로 (바로가기)
        </GitHubLink>
        <WebsiteLink href="http://ottify.kro.kr/" target="_blank">
          사이트로 (바로가기)
        </WebsiteLink>
      </LinksContainer>
    </Box>
  );
}

export default Project2;
