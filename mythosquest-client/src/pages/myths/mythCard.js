import React from 'react';

const MythCard = ({ title, content }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {title}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default MythCard;
