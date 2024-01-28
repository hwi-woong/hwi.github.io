import React, { useState } from "react";
import projects from "./Data/projects";
import "./CSS/Project.css";

function Project() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div id="project">
      <table>
        <thead>
          <tr>
            <th>프로젝트명</th>
            <th>프로젝트 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>학습공동체</td>
            <td>23.09-23.12</td>
          </tr>
           <tr>
            <td>Ottify</td>
            <td>23.11-24.01</td>
          </tr> 
        </tbody>
      </table>
      {projects.map((project, index) => (
        <button onClick={contentChange} value={index}>
          {project.tab}
        </button>
      ))}

      {projects[index].content}
    </div>
  );
}

export default Project;
