import React from "react";

const InnerCardSprint = () => {
  return (
    <div className="card">
      {image && <img src={image} alt="" className="card-image" />}
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default InnerCardSprint;
