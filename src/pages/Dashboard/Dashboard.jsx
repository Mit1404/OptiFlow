import React from "react";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {
  const taskCount = 3;
  const completedTasks = 2;
  const incompleteTasksBySection = {
    "To do": 0,
    Doing: 1,
    Done: 0,
  };
  const overdueTasks = 0;
  const totalTasksByCompletionStatus = {
    Completed: 2,
    Incomplete: 1,
    Total: 3,
  };

  const taskFilters = [
    {
      name: "To do",
      count: incompleteTasksBySection["To do"],
    },
    {
      name: "Doing",
      count: incompleteTasksBySection.Doing,
    },
    {
      name: "Done",
      count: incompleteTasksBySection.Done,
    },
    {
      name: "Overdue",
      count: overdueTasks,
    },
  ];

  const totalTasks = totalTasksByCompletionStatus.Total;
  const completedTaskCount = totalTasksByCompletionStatus.Completed;
  const incompleteTaskCount = totalTasks - completedTaskCount;

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h2>Task count:</h2>
          <p>{taskCount}</p>
        </div>
        <div className="dashboard-stat">
          <h2>Completed tasks:</h2>
          <p>{completedTasks}</p>
        </div>
        <div className="dashboard-stat">
          <h2>Incomplete tasks:</h2>
          <p>
            {incompleteTasksBySection["To do"] +
              incompleteTasksBySection.Doing +
              incompleteTasksBySection.Done}
          </p>
        </div>
        <div className="dashboard-stat">
          <h2>Overdue tasks:</h2>
          <p>{overdueTasks}</p>
        </div>
      </div>
      <div className="dashboard-filters">
        <h2>Filters:</h2>
        <ul>
          {taskFilters.map((filter, index) => (
            <li key={index}>
              <span>{filter.count} = 1 Filter</span>
              <span>{filter.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h2>Total tasks by completion status:</h2>
          <ul>
            {Object.entries(totalTasksByCompletionStatus).map(
              ([key, value]) => (
                <li key={key}>
                  <span>{key}:</span>
                  <span>{value}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h2>Total tasks:</h2>
          <p>{totalTasks}</p>
        </div>
        <div className="dashboard-stat">
          <h2>Completed:</h2>
          <p>{completedTaskCount}</p>
        </div>
        <div className="dashboard-stat">
          <h2>Incomplete:</h2>
          <p>{incompleteTaskCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
