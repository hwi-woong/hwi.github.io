import React from 'react';

const Activity2 = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>경영경제 연합 학회</h1>

      <div style={{ textAlign: 'center' }}>
  <span style={{ fontSize: '2rem' }}>활동내용</span>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <li style={{ fontSize: '2rem', backgroundColor: 'yellow' }}>기업분석 대회 학회 3등 수상</li>
      <img src="image/activity3-1.png" alt="기업분석" style={{ width: '60%', height: 'auto' }} />
    </div>
    <div>

    <li style={{ fontSize: '2rem', backgroundColor: 'yellow' }}>모의투자 대회 학회 3등 수상</li>
      <img src="image/activity3-2.png" alt="투자" style={{ width: '80%', height: 'auto' }} />
    </div>
  </div>
  <div>
    <li style={{ fontSize: '2rem', backgroundColor: 'yellow' }}>소규모 창업대회 학회 3등 수상</li>
    <img src="image/activity3.png" alt="창업" style={{ width: '30%', height: 'auto' }} />
    <li style={{ fontSize: '2rem' }}>경제 토론대회 참가</li>
  </div>
</div>

    </div>
  );
};

export default Activity2;
