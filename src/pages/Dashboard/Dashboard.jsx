// Dashboard.jsx
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h2 className="card-title">Card 1</h2>
        <div className="number">123</div>
      </div>
      <div className="card">
        <h2 className="card-title">Card 2</h2>
        <div className="number">456</div>
      </div>
      <div className="card">
        <h2 className="card-title">Card 3</h2>
        <div className="number">789</div>
      </div>
      <div className="card">
        <h2 className="card-title">Card 4</h2>
        <div className="number">101</div>
      </div>
    </div>
  );
};

export default Dashboard;
