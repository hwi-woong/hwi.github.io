import React, { useState } from "react";
import interns from "./Data/Interns";
import "./CSS/Intern.css";

function Intern() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div id="intern">
      <table>
        <thead>
          <tr>
            <th>근무 기업</th>
            <th>근무 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>두산베어스</td>
            <td>22.04-23.02</td>
          </tr>
          {/* <tr>
            <td>기업은행</td>
            <td>24.01-24.02</td>
          </tr> */}
        </tbody>
      </table>
      {interns.map((intern, index) => (
        <button onClick={contentChange} value={index}>
          {intern.tab}
        </button>
      ))}

      {interns[index].content}
    </div>
  );
}

export default Intern;
