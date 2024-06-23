import React, { useState } from "react";
import {
  Form,
  Link,
  useRouteLoaderData,
  useSubmit,
  useParams,
} from "react-router-dom";
import Title from "../components/Title";
import Modal from "../Pages/Model";
import ButtonComponent from "../components/ButtonComponent";
import Menu from "../components/Menu";
import Success from "../components/Success";
import FormModel from "../components/FormModel";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { ConnectedTvOutlined } from "@mui/icons-material";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
function Projects() {
  const data = useRouteLoaderData("projects");
  const [showModal, setShowModal] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const submit = useSubmit();
  const params = useParams();

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClosSuccess = () => {
    setSuccessMessage(false);
  };

  // const handleSave = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("description", description);
  //   formData.append("client_id", selectedClientId);
  //   formData.append("logo", file);
  //     const response = await AddProject(formData);
  //       setShowModal(false);
  //       setSuccessMessage(true);
  // };
  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("client_id", selectedClientId);
    formData.append("logo", file);
    try {
      const response = await AddProject(formData);
      console.log(showModal)
      console.log(successMessage)
      console.log("----------------")
  

      setShowModal(false);
      setSuccessMessage(true);
      console.log(showModal)
      console.log(successMessage)

    } catch (error) {
      console.error("Error adding project:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      try {
        const response = await DeleteProject(id);
        if (response.success) {
          window.location.reload(); // Refresh the page to show updated projects list
        } else {
          console.error("Failed to delete project.");
        }
      } catch (error) {
        console.error("Error deleting project:", error);
      }
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
      <div className=" text-white font-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((project) => (
          <div
            className="bg-lightgray mt-1 block w-full border-2   rounded-lg py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-pistach sm:text-sm sm:leading-6 hover:border-pistach"
            key={project.id}
          >
            <div className="">
              <Link to={`${project.id}`}>
                <img
                  className="w-full h-56 object-cover"
                  src={project.logo}
                  alt="green iguana"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">
                    {" "}
                    {project.name}
                  </h5>
                  <p className="text-gray-600 text-base">
                    Client: {project.client.name}
                  </p>
                </div>
              </Link>
              <div className="ml-5 mr-5">
                <button
                  onClick={() => handleDelete(project.id)}
                  className=" border text-red-500 border-red-500 text-customRed  hover:bg-red-500 hover:text-white  py-2 px-4 rounded-lg"
                >
                  Delete
                  <DeleteOutlineSharpIcon />
                </button>
                <span className="ml-3" />
                <Link to={`${project.id}`}>
                <button
                  onClick={() => handleDelete(project.id)}
                  className=" border text-pistach border-pistach text-customRed  hover:bg-pistach hover:text-white  py-2 px-4 rounded-lg"
                >
                  Details
                  <ReadMoreSharpIcon />
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {successMessage && <Success onClose={handleClosSuccess} />}

      {showModal && (
        <Modal title="New Project" onClose={handleClose} onSave={handleSave}>
          <FormModel
            label="project name:"
            id="name"
            type="text"
            placeholder="Enter project name"
            onChange={(e) => setName(e.target.value)}
          />

          <FormModel
            label="description:"
            id="description"
            type="text"
            placeholder="Enter project description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Menu onClientSelect={setSelectedClientId} />
          <label className="font-title font-bold block text-background mt-3">
            Image:
          </label>
          <div className="container mx-auto p-4">
            <label
              htmlFor="photo"
              className="relative flex flex-col items-center justify-center bg-white border-dashed border-2 border-background h-20 w-full rounded-lg shadow-sm cursor-pointer hover:border-pistach focus-within:border-pistach"
            >
              <AddPhotoAlternateOutlinedIcon className="text-pistach" />
              {file ? file.name : "Click to upload image"}
              <input
                type="file"
                id="photo"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Projects;

async function AddProject(formData) {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  
    const response = await fetch("http://192.168.1.5:8000/company/projects", {
      method: "POST",
      headers: headers,
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Could not fetch projects.");
    }
  const responseData = await response.json();
  return responseData;
}

export async function loader({ request }) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(
    "http://192.168.1.5:8000/company/projects?page=1",
    {
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error("Could not fetch projects.");
  }

  const responseData = await response.json();
  console.log(responseData.projects);
  return responseData.projects; // Return parsed JSON data
}

async function DeleteProject(id) {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `http://192.168.1.5:8000/company/projects/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Could not delete project.");
  }

  const responseData = await response.json();
  return responseData;
}
