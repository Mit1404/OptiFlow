import React from "react";
import InnerCardSprint from "./InnerCardSprint";

const OuterCardSprint = () => {
  return (
    <>
      <InnerCardSprint />
      <InnerCardSprint />
      <InnerCardSprint />
    </>
  );
};

export default OuterCardSprint;
