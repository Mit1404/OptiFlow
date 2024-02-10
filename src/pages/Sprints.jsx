import React from "react";
import OuterCardSprint from "../components/Sprint/OuterCardSprint";

const Sprints = () => {
  return (
    <>
      <div className="flex flex-row">
        <OuterCardSprint />
        <OuterCardSprint />
        <OuterCardSprint />
      </div>
    </>
  );
};

export default Sprints;

