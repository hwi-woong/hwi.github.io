import React from 'react';
// Import your award images
import project3 from '../image/project3.png';
import project6 from '../image/project6.jpg';
import '../CSS/Award.css';

const awardsData = [
  { image: project3, name: '학습공동체' },
  { image: project6, name: '후반기 프로젝트' },
  // Add more awards as needed
];


const Award = () => {
    // Slice the awardsData array to get only the first 2 elements for (0,1) and (0,2)
    const topRowAwards = awardsData.slice(0, 2);
    // Slice the awardsData array to get only the next 2 elements for (1,1) and (1,2)
    const bottomRowAwards = awardsData.slice(2);
  
    return (
      <div className="awards-container">
        {topRowAwards.map((award, index) => (
          <div className="award-card" key={index}>
            <img className="award-image" src={award.image} alt={`Award ${index + 1}`} />
            <p className="award-name">{award.name}</p>
          </div>
        ))}
  
        {bottomRowAwards.map((award, index) => (
          <div className="award-card" key={index + topRowAwards.length}>
            <img className="award-image" src={award.image} alt={`Award ${index + 3}`} />
            <p className="award-name">{award.name}</p>
          </div>
        ))}
      </div>
    );
  };

export default Award;
