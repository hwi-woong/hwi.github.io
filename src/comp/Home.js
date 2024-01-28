import React from "react";
import styled from 'styled-components';
import hwi from "./image/hwi.png";

// Define a styled component for the box
const Box = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  margin: 10px;
  border: 25px solid green;
  border-radius: 50px;
  display: flex; /* Use flexbox */
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Add space between items */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 50); /* 그림자 추가 */
 
`;

// Define a styled component for the title
const Title = styled.h2`
  font-size: 25px;
  color: ${props => props.color};
`;
const NotionLink = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 25px; 
`;


function Home() {
  return (
    <div>
      <Title color="black">진휘웅의 Portfolio</Title>
      <Box>
        <Title color="black">

          <img src = {hwi} alt = "휘웅" style={{ width: '30%', height: '30%', overflow: "hidden" }}/>
          <ul>
            <li><a href="https://hwi-woong.github.io/hwi.github.io/introduction">진휘웅 소개</a></li>
            <li><a href="https://hwi-woong.github.io/hwi.github.io/language">진휘웅의 언어</a></li>
            <li><a href="https://hwi-woong.github.io/hwi.github.io/certificate">진휘웅의 자격증</a></li>
            <li><a href="https://hwi-woong.github.io/hwi.github.io/intern">진휘웅이 경험한 인턴</a></li>
            <li><a href="https://hwi-woong.github.io/hwi.github.io/activity">진휘웅의 대외활동</a></li>
          </ul>
        </Title>
        <NotionLink href="https://aluminum-gaura-474.notion.site/4dd1fabeca5041589b753ad3b97ff439?pvs=4" target="_blank" rel="noopener noreferrer">
        진휘웅의 공부 다이어리(여기를 눌러주세요..)
        </NotionLink>
      </Box>
    </div>
  );
}
export default Home;
