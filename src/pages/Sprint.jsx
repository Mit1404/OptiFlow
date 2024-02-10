import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import React from "react";
import { Header } from "../components";
import { kanbanData, kanbanGrid } from "../data/dummy";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sprint = () => {
  const navigate = useNavigate();
  
  const addSprint = () => {
    navigate("/sprintform");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex flex-row justify-between">
        <Header category="App-name" title="Sprint" />
        <IoAddSharp size="50px" onClick={addSprint} />
      </div>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id",
          tagsField: "Tags",
          grabberField: "Color",
        }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};
export default Sprint;
