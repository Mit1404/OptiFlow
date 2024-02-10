import React from "react";
import InnerCardSprint from "./InnerCardSprint";

const OuterCardSprint = () => {
  return (
    <>
      <div className="flex flex-col">
        <InnerCardSprint />
        <InnerCardSprint />
        <InnerCardSprint />
      </div>
    </>
  );
};

export default OuterCardSprint;
