import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const KanbanColumn = ({ title, status, tasks, fetchData }) => {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 min-h-[200px] p-4 bg-gray-50 rounded-lg"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} fetchData={fetchData} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;