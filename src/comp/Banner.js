import "./CSS/Banner.css"; // Import the style from your CSS file
import React from "react";
import styled from 'styled-components';
let Box = styled.div`
  background-color:beige;
  padding: 20px;
  margin: 10px;
  border: 1px solid darkgray;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  border-radius: 20px;
`;
// Define a styled component for the title
let Title = styled.h2`
  font-size: 25px;
  color: ${props => props.색깔};
`;
function Banner() {
  return (
    <Box>
      <Title 색깔="black">근성있고 모험심 강한 진휘웅</Title>
    </Box>
  );
}
export default Banner;
