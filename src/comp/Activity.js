import React, { useState } from "react";
import activities from "./Data/activities";
import "./CSS/Activity.css";

function Activity() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div id="activity">
      <table>
        <thead>
          <tr>
            <th>활동단체</th>
            <th>활동기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>아름샘 봉사단</td>
            <td>19.04-19.12</td>
          </tr>
          <tr>
            <td>참지마요</td>
            <td>22.08-22.12</td>
          </tr>
          <tr>
            <td>(FKI 전국경제인연합회 산하)EIC</td>
            <td>22.03-23.06</td>
          </tr>
          <tr>
            <td>테이브</td>
            <td>23.09-24.01</td>
          </tr>
        </tbody>
      </table>
      {activities.map((Activity, index) => (
        <button onClick={contentChange} value={index}>
          {Activity.tab}
        </button>

      ))}

      {activities[index].content}
    </div>
  );
}

export default Activity;
