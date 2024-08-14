import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StartEndDate from "./StartEndDate";
import TaskDetails from "../Pages/TasksDetails";
import { changeStatus } from "../http";
const getItemBgColor = (columnId) => {
  switch (columnId) {
    case "TODO":
      return "bg-blueTasksBg";
    case "DOING":
      return "bg-redTaskBg";
    case "TO_CHECK":
      return "bg-yellowTaskBg";
    case "DONE":
      return "bg-greenTaskBg";
    default:
      return "bg-gray-600";
  }
};

const getItemTextColor = (columnId) => {
  switch (columnId) {
    case "TODO":
      return "text-blue-900";
    case "DOING":
      return "text-red-900";
    case "TO_CHECK":
      return "text-yellow-900";
    case "DONE":
      return "text-green-900";
    default:
      return "text-gray-900";
  }
};

export default function DragDrop({ initialColumns }) {
  const [columns, setColumns] = useState(initialColumns);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
    setSelectedEmployee(null);
  };
  const handleButtonClick = (task) => {
    navigate(`${task.id}`, { state: { task } });
  };

  // Handle drag start
  const onDragStart = (event, itemId) => {
    event.dataTransfer.setData("itemId", itemId);
  };

  // Handle drop event
  const onDrop = async (event, columnId) => {
    event.preventDefault();
    var status;
    if (columnId == "TO_CHECK") {
      status = 2;
    } else if (columnId == "TODO") {
      status = 0;
    } else if (columnId == "DOING") {
      status = 1;
    } else if (columnId == "DONE") {
      status = 3;
    }
    if(status===3){
      return;
    }
    const formData = new FormData();
    formData.append("status", status);
    const itemId = event.dataTransfer.getData("itemId");
    const sourceColumnId = Object.keys(columns).find((colId) =>
      columns[colId].some((item) => item.id === parseInt(itemId))
    );
    if (!sourceColumnId || sourceColumnId === columnId) return;

    const sourceColumn = columns[sourceColumnId];
    const destColumn = columns[columnId];
    const item = sourceColumn.find((item) => item.id === parseInt(itemId));

    // Remove item from source column and add to destination column
    const updatedSourceItems = sourceColumn.filter(
      (item) => item.id !== parseInt(itemId)
    );
    const updatedDestItems = [...destColumn, item];

    setColumns({
      ...columns,
      [sourceColumnId]: updatedSourceItems,
      [columnId]: updatedDestItems,
    });
    try {
      console.log(status);
      const response = await changeStatus(formData, itemId);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  // Handle drag over to allow dropping
  const onDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center h-full main-h-screen space-x-4">
      {Object.entries(columns).map(([columnId, tasksArray]) => (
        <div
          key={columnId}
          className="flex flex-col w-full border border-white border-b-2 rounded-3xl p-2"
          onDrop={(event) => onDrop(event, columnId)}
          onDragOver={onDragOver}
        >
          <div className="inline-flex w-full border-b-2 border-white">
            <ArrowRightIcon className="mt-2 text-white" />
            <h2 className="text-lg font-title text-white mt-2">{columnId}</h2>
          </div>

          <div className="w-full mt-4 ">
            {tasksArray.map((item) => (
              <Link to={`${item.id}`} key={item.id}>
                <div
                  key={item.id}
                  draggable
                  onDragStart={(event) => onDragStart(event, item.id)}
                  className={`${getItemBgColor(columnId)} ${getItemTextColor(
                    columnId
                  )} font-content p-5 w-60 mb-2 rounded-2xl cursor-pointer m-4`}
                >
                  <div className="text-lg font-bold text-start ">
                    {item.title}
                  </div>

                  {/* employee */}
                  <div className=" mb-3 flex items-center">
                    <p className="mr-4">Assignees:</p>
                    {item.employees.map((employee) => (
                      <img
                        key={employee.id}
                        src={employee.image}
                        alt={employee.name}
                        className="w-7 h-7 rounded-full -ml-3 first:ml-0"
                      />
                    ))}

                    {showDetails && selectedTask && (
                      <TaskDetails
                        Task={setSelectedTask}
                        onClose={handleCloseModal}
                      />
                    )}
                  </div>

                  {/* date */}
                  <StartEndDate start={item.start_date} end={item.end_date} />
                </div>
                </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
