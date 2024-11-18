import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import useDeleteData from "../hooks/useDeleteData";

const TaskCard = memo(({ task, index, fetchData }) => {
  const { deleteData } = useDeleteData("/tasks");

  const handleDelete = (id) => {
    deleteData(id, () => {
      fetchData();
    });
  };

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="card-body">
            <h2 className="card-title">{task.title}</h2>
            <p>{task.description}</p>
            <div className="badge badge-outline">{task.tag}</div>
            <div className="text-sm text-gray-500 mt-2">
              {task.start_date} - {task.end_date}
            </div>
            <button onClick={() => handleDelete(task.id)} className="btn btn-outline btn-error btn-sm mt-4">Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
});

TaskCard.displayName = "TaskCard";

export default TaskCard;