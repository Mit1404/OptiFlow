import React, { useState } from "react";
import "./Sprintform.css";
const Springform = () => {
  // Use the useState hook to create state variables for the form inputs
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [priority, setPriority] = useState("High");

  // This function will be called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data here
    console.log({ task, deadline, priority });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskInput">Enter the Task:</label>
      <input
        type="text"
        id="taskInput"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <label htmlFor="deadlineInput">Enter Deadline of task:</label>
      <input
        type="date"
        id="deadlineInput"
        value={deadline.toISOString().split("T")[0]}
        onChange={(event) => setDeadline(new Date(event.target.value))}
      />
      <label htmlFor="prioritySelect">Priority:</label>
      <select
        id="prioritySelect"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        className="btn"
        type="submit"
        style={{ backgroundColor: "#09325e" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Springform;
