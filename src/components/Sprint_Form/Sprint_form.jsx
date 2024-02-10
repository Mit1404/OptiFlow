import React, { useState } from "react";
import "./Sprint_form.css";
import Header from "../Header";

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
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Project-name" title="Sprint" />
      <form className="sprint_form" onSubmit={handleSubmit}>
        <label className="text_label" htmlFor="taskTitle">
          Task Title:
        </label>
        <input
          className="input_select"
          type="text"
          id="taskTitle"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <label className="text_label" htmlFor="taskDescription">
          Task Description:
        </label>
        <input
          className="input_select"
          type="text"
          id="taskDescription"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <label className="text_label" htmlFor="deadlineInput">
          Task Deadline:
        </label>
        <input
          className="input_select"
          type="date"
          id="deadlineInput"
          value={deadline.toISOString().split("T")[0]}
          onChange={(event) => setDeadline(new Date(event.target.value))}
        />
        <label className="text_label" htmlFor="prioritySelect">
          Priority:
        </label>
        <select
          className="input_select"
          id="prioritySelect"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label className="text_label" htmlFor="taskTitle">
          Team Alloted:
        </label>
        <input
          className="input_select"
          type="text"
          id="taskTitle"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button className="button_form" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Springform;
