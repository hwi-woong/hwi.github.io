import React from 'react';
import '../CSS/Resume.css' ;

const Resume = () => {
  return (
    <div id = "resume">
	    <em>1.기초 자료</em>
	    <table>
		    <tr>
			    <td  bgcolor=" #008000">성 명</td>
			    <td>진휘웅</td>
  			  <td bgcolor="#008000">영어성명</td>
	  		  <td>Hwiwoong Jin</td>
	  	  </tr>
		    <tr>
  			  <td bgcolor="#008000">주민등록번호</td>
	  		  <td colspan="3"></td>
  		  </tr>
	  	  <tr>
	  		  <td bgcolor="#008000">E-mail</td>
	  		  <td colspan="3">matt7695@naver.com</td>
	  	  </tr>
	  	  <tr>
	  		  <td bgcolor="#008000">연락처</td>
	  		  <td colspan="3">010-8948-7695</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#008000">주소</td>
	  	  	<td colspan="3">서울특별시 양천구 목동</td>
	  	  </tr>	
	    </table>

      <em>2.학력사항</em>
      <table>
      <tr>
	      <th bgcolor="#008000">기간</th>
	      <th bgcolor="#008000">상세내용</th>
	      <th bgcolor="#008000">비고</th>
      </tr>
	   
	    <tr>
	    	<td>중학교</td> <td>당산 중학교</td> <td>정근</td>
	    </tr>
	    <tr>
	    	<td>고등학교</td>	<td>장훈고등학교</td> <td>개근</td>
	    </tr>
	    <tr>
	    	<td>대학교 </td> <td>가천대학교</td> <td>경제학과/컴퓨터겅학과(복)</td>
	    </tr>
    </table>

  </div>
  );
};

export default Resume;