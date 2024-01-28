// Login.js
import React from 'react';

const Login = (props) => {
  const { id, pwd, changeId, changePwd, handleSubmit } = props;

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>개인정보 보호를 위해 로그인해주세요.</h3>
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" value={id} onChange={changeId} required />
        <br />
        <label htmlFor="pwd">비밀번호</label>
        <input type="password" id="pwd" value={pwd} onChange={changePwd} required />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
