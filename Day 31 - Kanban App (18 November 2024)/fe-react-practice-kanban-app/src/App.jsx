import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from "./components/Navbar";
import AddTaskModal from "./components/AddTaskModal";
import KanbanColumn from "./components/KanbanColumn";
import useFetchData from "./hooks/useFetchData";
import useUpdateData from "./hooks/useUpdateData";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { data, loading, error, fetchData } = useFetchData("/tasks");
  const { updateData } = useUpdateData("/tasks");

  const tasksByStatus = {
    backlog: data?.filter((task) => task.status === "backlog") || [],
    "on-progress": data?.filter((task) => task.status === "on-progress") || [],
    done: data?.filter((task) => task.status === "done") || [],
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const task = data.find((item) => item.id === draggableId);
    if (!task) return;

    const updatedTask = {
      ...task,
      status: destination.droppableId,
    };

    updateData(task.id, updatedTask, fetchData);
  };

  return (
    <div>
      <Navbar toggleModal={toggleModal} />
      {isModalOpen && (
        <AddTaskModal toggleModal={toggleModal} fetchData={fetchData} />
      )}
      <div className="p-4">
        {loading && (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
            Loading...
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center">{error.message}</div>
        )}
        {!loading && error === null && data?.length === 0 && (
          <div className="text-center">No data found</div>
        )}

        {!loading && error === null && data?.length > 0 && (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="flex space-x-4">
              <KanbanColumn
                title="Backlog"
                status="backlog"
                tasks={tasksByStatus.backlog}
                fetchData={fetchData}
              />
              <KanbanColumn
                title="On Progress"
                status="on-progress"
                tasks={tasksByStatus["on-progress"]}
                fetchData={fetchData}
              />
              <KanbanColumn
                title="Done"
                status="done"
                tasks={tasksByStatus.done}
                fetchData={fetchData}
              />
            </div>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

export default App;
