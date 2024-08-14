import React, { useState, useEffect } from "react";
import Model from "../Pages/Model";
import FormModelRequired from "../components/FormModelRequired";
import { tasksToggle } from "../http";

export default function TimerToggle({ id }) {
  // timer is on or off
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState();

  const handleClose = () => {
    setShowModal(false);
  };
  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    try {
      const response = await tasksToggle(formData, id);
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };
  const start = async () => {
    const formData = new FormData();
    try {
      const response = await tasksToggle(formData, id);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false);
      setShowModal(true);
    } else {
      setTime(0);
      setIsRunning(true);
      start();
    }
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="font-number text-xl ">{formatTime(time)}</div>
      <button
        onClick={handleToggle}
        className={`px-4 py-2 rounded-full hover:bg-white ${
          isRunning ? "bg-red-400" : "bg-pistach"
        } text-background`}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      {showModal && (
        <Model onClose={handleClose} onSave={handleSave} labelButton={"ok"}>
          <FormModelRequired
            label=" Discription of this :"
            id="description"
            type="text"
            placeholder="Enter sub task discription  "
            onChange={(e) => setDescription(e.target.value)}
          />
        </Model>
      )}
    </div>
  );
}
