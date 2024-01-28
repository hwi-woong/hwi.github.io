import React, { useState } from "react";
import "./CSS/Certificate.css";

function Certificate() {
  // 자격증 목록과 새 자격증 정보를 저장하는 상태
  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    title: "",
    details: "",
    acquisitionDate: "",
  });

  // 새 자격증 입력 양식의 변경을 처리하는 함수
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCertificate({ ...newCertificate, [name]: value });
  };

  // 새 자격증을 목록에 추가하는 함수
  const addCertificate = () => {
    setCertificates([...certificates, newCertificate]);
    setNewCertificate({ title: "", details: "", acquisitionDate: "" });
  };

  return (
    <div id="certificate">
      <h2>자격증 목록</h2>

      {/* 자격증 입력 양식 */}
      <form>
        <label>
          자격증명:
          <input
            type="text"
            name="title"
            value={newCertificate.title}
            onChange={handleInputChange}
          />
        </label>

        <label>
          자격증 내용:
          <textarea
            name="details"
            value={newCertificate.details}
            onChange={handleInputChange}
          />
        </label>

        <label>
          취득일자:
          <input
            type="text"
            name="acquisitionDate"
            value={newCertificate.acquisitionDate}
            onChange={handleInputChange}
          />
        </label>

        <button type="button" onClick={addCertificate}>
          추가
        </button>
      </form>

      {/* 자격증 목록 */}
      <ul>
        {/* 자격증 배열을 매핑하여 각 자격증을 표시함 */}
        {certificates.map((certificate, index) => (
          <li key={index}>
            <strong>{certificate.title}</strong>
            <br />
            {certificate.details}
            <br />
            취득일: {certificate.acquisitionDate}
            <br />
          </li>
        ))}
        {/* 예시 자격증 데이터 */}
        <li>운전면허 2종
         <br></br>
        취득일: 2019.06
        </li>
        {/* 예시 이미지 */}
        <img src="image/certi-3.png" alt="기업분석" style={{ width: '35%', height: '35%' }} />
      </ul>
    </div>
  );
}
export default Certificate;
