import React, { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TaskAssignees from "./TaskAssignees";
import StartEndDate from "./StartEndDate";
const initialItems = [
  {
    id: 1,
    project_id: {
      id: 93,
      name: "uguuu",
      client: {
        id: 6,
        name: "Rana",
        email: "ranaimad860@gmail.com",
        image:
          "http://192.168.1.6:8000/storage/companies/clients/images/79/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-30T09:34:17.000000Z",
        updated_at: "2024-06-30T09:34:17.000000Z",
      },
      logo: "http://192.168.1.6:8000/storage/companies/projects/logos/96/1.png",
      created_at: "2024-07-06T14:15:18.000000Z",
      updated_at: "2024-07-06T14:15:18.000000Z",
    },
    employees: [
      {
        id: 1,
        name: "RanaImad",
        email: "rana@r-link.com",
        phone: "0997499848",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/94/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-14T19:32:34.000000Z",
        updated_at: "2024-07-30T11:16:45.000000Z",
      },
      {
        id: 2,
        name: "abd alrahman",
        email: "abdulrhmanak@gmail.com",
        phone: "0968084263",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/89/profile.jpg",
        created_at: "2024-07-02T21:32:50.000000Z",
        updated_at: "2024-07-04T20:16:59.000000Z",
      },
      {
        id: 3,
        name: "RanaImad",
        email: "rana@r-link.com",
        phone: "0997499848",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/94/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-14T19:32:34.000000Z",
        updated_at: "2024-07-30T11:16:45.000000Z",
      },
    ],
    title: "Testing",
    description: "test",
    status_translation: "To Do",
    status: 0,
    total_duration: "09:50",
    start_date: "2024-06-05",
    end_date: "2024-07-05",
    created_at: "2024-07-30T11:43:42.000000Z",
    updated_at: "2024-07-30T11:43:42.000000Z",
  },
  {
    id: 2,
    project_id: {
      id: 93,
      name: "uguuu",
      client: {
        id: 6,
        name: "Rana",
        email: "ranaimad860@gmail.com",
        image:
          "http://192.168.1.6:8000/storage/companies/clients/images/79/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-30T09:34:17.000000Z",
        updated_at: "2024-06-30T09:34:17.000000Z",
      },
      logo: "http://192.168.1.6:8000/storage/companies/projects/logos/96/1.png",
      created_at: "2024-07-06T14:15:18.000000Z",
      updated_at: "2024-07-06T14:15:18.000000Z",
    },
    employees: [
      {
        id: 2,
        name: "abd alrahman",
        email: "abdulrhmanak@gmail.com",
        phone: "0968084263",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/89/profile.jpg",
        created_at: "2024-07-02T21:32:50.000000Z",
        updated_at: "2024-07-04T20:16:59.000000Z",
      },
    ],
    title: "test 1",
    description: "this is test task discriptin",
    status_translation: "To Do",
    status: 0,
    total_duration: "0",
    start_date: "2024-06-05",
    end_date: "2024-07-05",
    created_at: "2024-07-31T11:36:24.000000Z",
    updated_at: "2024-07-31T11:36:24.000000Z",
  },
  {
    id: 3,
    project_id: {
      id: 93,
      name: "uguuu",
      client: {
        id: 6,
        name: "Rana",
        email: "ranaimad860@gmail.com",
        image:
          "http://192.168.1.6:8000/storage/companies/clients/images/79/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-30T09:34:17.000000Z",
        updated_at: "2024-06-30T09:34:17.000000Z",
      },
      logo: "http://192.168.1.6:8000/storage/companies/projects/logos/96/1.png",
      created_at: "2024-07-06T14:15:18.000000Z",
      updated_at: "2024-07-06T14:15:18.000000Z",
    },
    employees: [
      {
        id: 2,
        name: "abd alrahman",
        email: "abdulrhmanak@gmail.com",
        phone: "0968084263",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/89/profile.jpg",
        created_at: "2024-07-02T21:32:50.000000Z",
        updated_at: "2024-07-04T20:16:59.000000Z",
      },
    ],
    title: "testing",
    description: "this is test task discriptin",
    status_translation: "To Do",
    status: 0,
    total_duration: "03:40",
    start_date: "2024-06-05",
    end_date: "2024-07-05",
    created_at: "2024-07-31T11:36:24.000000Z",
    updated_at: "2024-07-31T11:36:24.000000Z",
  },
  {
    id: 4,
    project_id: {
      id: 93,
      name: "uguuu",
      client: {
        id: 6,
        name: "Rana",
        email: "ranaimad860@gmail.com",
        image:
          "http://192.168.1.6:8000/storage/companies/clients/images/79/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-30T09:34:17.000000Z",
        updated_at: "2024-06-30T09:34:17.000000Z",
      },
      logo: "http://192.168.1.6:8000/storage/companies/projects/logos/96/1.png",
      created_at: "2024-07-06T14:15:18.000000Z",
      updated_at: "2024-07-06T14:15:18.000000Z",
    },
    employees: [
      {
        id: 2,
        name: "abd alrahman",
        email: "abdulrhmanak@gmail.com",
        phone: "0968084263",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/89/profile.jpg",
        created_at: "2024-07-02T21:32:50.000000Z",
        updated_at: "2024-07-04T20:16:59.000000Z",
      },
    ],
    title: "testing",
    description: "this is test task discriptin",
    status_translation: "To Do",
    status: 0,
    total_duration: "03:40",
    start_date: "2024-06-05",
    end_date: "2024-07-05",
    created_at: "2024-07-31T11:36:24.000000Z",
    updated_at: "2024-07-31T11:36:24.000000Z",
  },
  {
    id: 5,
    project_id: {
      id: 93,
      name: "uguuu",
      client: {
        id: 6,
        name: "Rana",
        email: "ranaimad860@gmail.com",
        image:
          "http://192.168.1.6:8000/storage/companies/clients/images/79/Female-Reporter-free-icons-designed-by-Aranagraphics.jpg",
        created_at: "2024-06-30T09:34:17.000000Z",
        updated_at: "2024-06-30T09:34:17.000000Z",
      },
      logo: "http://192.168.1.6:8000/storage/companies/projects/logos/96/1.png",
      created_at: "2024-07-06T14:15:18.000000Z",
      updated_at: "2024-07-06T14:15:18.000000Z",
    },
    employees: [
      {
        id: 2,
        name: "abd alrahman",
        email: "abdulrhmanak@gmail.com",
        phone: "0968084263",
        image:
          "http://192.168.1.6:8000/storage/companies/employees/images/89/profile.jpg",
        created_at: "2024-07-02T21:32:50.000000Z",
        updated_at: "2024-07-04T20:16:59.000000Z",
      },
    ],
    title: "testing",
    description: "this is test task discriptin",
    status_translation: "To Do",
    status: 0,
    total_duration: "03:40",
    start_date: "2024-06-05",
    end_date: "2024-07-05",
    created_at: "2024-07-31T11:36:24.000000Z",
    updated_at: "2024-07-31T11:36:24.000000Z",
  },
];

const initialColumns = {
  0: { name: "To do", tasks: initialItems },
  1: { name: "Doing", tasks: [] },
  2: { name: "To check", tasks: [] },
  3: { name: "Done", tasks: [] },
};

const getItemBgColor = (columnId) => {
  switch (columnId) {
    case "0":
      return "bg-blueTasksBg";
    case "1":
      return "bg-redTaskBg";
    case "2":
      return "bg-yellowTaskBg";
    case "3":
      return "bg-greenTaskBg";
    default:
      return "bg-gray-600";
  }
};

const getItemTextColor = (columnId) => {
  switch (columnId) {
    case "0":
      return "text-blue-900";
    case "1":
      return "text-red-900";
    case "2":
      return "text-yellow-900";
    case "3":
      return "text-green-900";
    default:
      return "text-gray-900";
  }
};

export default function DragDrop({initialColumnss}) {
  const [columns, setColumns] = useState(initialColumns);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
    setSelectedEmployee(null);
  };

  // Handle drag start
  const onDragStart = (event, itemId) => {
    event.dataTransfer.setData("itemId", itemId);
  };

  // Handle drop event
  const onDrop = (event, columnId) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId");
    const sourceColumnId = Object.keys(columns).find((colId) =>
      columns[colId].tasks.some((item) => item.id === parseInt(itemId))
    );
    if (!sourceColumnId || sourceColumnId === columnId) return;

    const sourceColumn = columns[sourceColumnId];
    const destColumn = columns[columnId];
    const item = sourceColumn.tasks.find(
      (item) => item.id === parseInt(itemId)
    );

    // Remove item from source column and add to destination column
    const updatedSourceItems = sourceColumn.tasks.filter(
      (item) => item.id !== parseInt(itemId)
    );
    const updatedDestItems = [...destColumn.tasks, item];

    setColumns({
      ...columns,
      [sourceColumnId]: { ...sourceColumn, tasks: updatedSourceItems },
      [columnId]: { ...destColumn, tasks: updatedDestItems },
    });
  };

  // Handle drag over to allow dropping
  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center h-full main-h-screen space-x-4">
      {Object.entries(columns).map(([columnId, column]) => (
        <div
          key={columnId}
          className="flex flex-col w-full border border-white border-b-2 rounded-3xl p-2"
          onDrop={(event) => onDrop(event, columnId)} // columnId: destination column.
          onDragOver={onDragOver}
        >
          <div className="inline-flex w-full border-b-2 border-white">
            <ArrowRightIcon className="mt-2 text-white" />
            <h2 className="text-lg font-title text-white mt-2">
              {column.name}
            </h2>
          </div>
          <div className="w-full mt-4">
            {column.tasks.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(event) => onDragStart(event, item.id)}
                className={`${getItemBgColor(columnId)} ${getItemTextColor(
                  columnId
                )} font-content p-4 mb-2 rounded-2xl cursor-pointer m-4`}
              >
                <div className="text-lg font-bold	">{item.title}</div>
                <div className="">{item.description}</div>
                {/* employee */}
                <div className="flex items-center ">
                  <p className="mr-4">Assignees:</p>
                  {item.employees.map((employee, index) => (
                    <img
                      key={employee.id}
                      src={employee.image}
                      alt={employee.name}
                      className="w-7 h-7 rounded-full   -ml-3 first:ml-0"
                    />
                  ))}
                  <button
                    className=" hover:text-white"
                    onClick={() => handleOpenModal(item.employees)}
                  >
                    <MoreHorizIcon />
                  </button>
                  {showDetails && selectedEmployee && (
                    <TaskAssignees
                      employees={selectedEmployee}
                      onClose={handleCloseModal}
                    />
                  )}
                </div>
                {/* time */}
                <div className="flex">
                  <p className="mr-4">Elapsed time:</p>
                  <div className="font-number">{item.total_duration}</div>
                </div>
                {/* date */}
                <StartEndDate start={item.start_date} end={item.end_date} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
