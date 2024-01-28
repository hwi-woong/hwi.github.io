import React, { useState } from "react";
import intros from "./Data/intros";
import Login from "./Intro/Login";


function Introduction() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
    const [id, SetId] = useState("");
  const [pwd, SetPwd] = useState("");
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePwd = (e) => {
    SetPwd(e.target.value);
  };

  if (id === "cbkim" && pwd === "1111") {
  return (
    <div>
      {intros.map((intro, index) => (
        <button onClick={contentChange} value={index}>
          {intro.tab}
        </button>
      ))}
      <br /> <br />
      {intros[index].content}
    </div>
  );
}
else
    return (
      <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
    );
};

export default Introduction;
