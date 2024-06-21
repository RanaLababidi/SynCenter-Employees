import React, { useState } from "react";
import { Link, useRouteLoaderData, json } from "react-router-dom";
import Title from "../components/Title";
import Modal from "../Pages/Model";
import ButtonComponent from "../components/ButtonComponent";
import Menu from "../components/Menu";
import FormModel from "../components/FormModel";

function Projects() {
  const data = useRouteLoaderData("projects");
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = async (formData) => {
    try {
      await AddProject(formData); // Call AddProject with formData
      setShowModal(false);
      // Optionally, you can reload the data here or update state to reflect new project
    } catch (error) {
      console.error("Error adding project:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Title title="Projects" />
        <div className="inline">
          <ButtonComponent label="Add new Project" onClick={handleOpen} />
        </div>
      </div>
      <ul>
        {data.map((project) => (
          <li className="text-white" key={project.id}>
            <Link to={`${project.id}`} key={project.id}>
              {project.name} {/* Displaying the project name */}
            </Link>
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal title="New Project" onClose={handleClose} onSave={handleSave}>
          <FormModel
            label="project name:"
            id="name"
            type="text"
            placeholder="Enter project name"
            onRequestSubmit={handleSave} // Pass handleSave to FormModel
          />
          <Menu />
          <FormModel
            label="description:"
            id="description"
            type="text"
            placeholder="Enter project description"
            onRequestSubmit={handleSave} // Pass handleSave to FormModel
          />
        </Modal>
      )}
    </div>
  );
}

export default Projects;

export async function loader({ request }) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(
    "http://127.0.0.1:8000/company/projects?sort[id]=desc",
    {
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error("Could not fetch projects.");
  }

  const responseData = await response.json(); // Parse JSON response

  return responseData.projects; // Return parsed JSON data
}

export async function AddProject(formData) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const body = {
    name: formData.name,
    description: formData.description,
  };

  const response = await fetch("http://127.0.0.1:8000/company/projects", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to add project.");
  }

  const responseData = await response.json();
  return responseData.project;
}
