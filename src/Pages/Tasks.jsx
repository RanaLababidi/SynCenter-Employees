import React, { useState } from "react";
import Title from "../components/Title";
import ButtonComponent from "../components/ButtonComponent";
import { useRouteLoaderData } from "react-router-dom";
import DragDrop from "../components/DragDrop";
export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const data = useRouteLoaderData("projectsDetails");
  const tasksData = useRouteLoaderData("tasks");

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };



  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Title title="All tasks for this project :" />
      
      </div>
      <DragDrop initialColumns={tasksData} />
      <div className="text-white font-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
     
    </div>
  );
}
