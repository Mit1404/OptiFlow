import React from "react";

const InnerCardSprint = () => {
  const image = "https://source.unsplash.com/random";
  const header = "Sprint 1";
  const text = "This is the first sprint of the project";
  return (
    <div className="flex flex-col">
      <div className="bg-white dark:bg-dark-gray p-5 rounded-lg shadow-lg m-2">
        <img
          src={image}
          alt="sprint"
          className="w-full h-32 object-cover rounded-lg"
        />
        <h1 className="text-xl font-bold mt-5">{header}</h1>
        <p className="text-gray-400 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default InnerCardSprint;
