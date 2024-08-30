import React from 'react';

const MythCard = ({ title, desc }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default MythCard;
