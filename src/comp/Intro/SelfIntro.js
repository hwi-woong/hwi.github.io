import React, { useState } from 'react';
import '../CSS/Selfintro.css';

const SelfIntro = () => {
  const [selfIntroduction1, setSelfIntroduction1] = useState('');
  const [selfIntroduction2, setSelfIntroduction2] = useState('');

  const handleIntroductionChange1 = (event) => {
    setSelfIntroduction1(event.target.value);
  };

  const handleIntroductionChange2 = (event) => {
    setSelfIntroduction2(event.target.value);
  };

  return (
    <div id="selfIntroForm">
      <div className="division">
        <h1>자기소개서 작성</h1>
        <h3>지원동기</h3>
        <textarea
          value={selfIntroduction1}
          onChange={handleIntroductionChange1}
          placeholder="지원동기를 작성해주세요..."
          rows="10"
          cols="50"
        />
        <h3>갈등해결 경험</h3>
        <textarea
          value={selfIntroduction2}
          onChange={handleIntroductionChange2}
          placeholder="갈등해결 경험을 작성해주세요..."
          rows="10"
          cols="50"
        />
      </div>
    </div>
  );
};
export default SelfIntro;
