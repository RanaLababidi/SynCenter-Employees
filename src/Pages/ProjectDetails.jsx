import React, { useState } from "react";
import {
  Form,
  Link,
  useParams,
  useRouteLoaderData,
  useNavigate,
  redirect,
} from "react-router-dom";
import Modal from "../Pages/Model";
import CardButton from "../components/CardButton";
import FormModel from "../components/FormModel";
import Menu from "../components/Menu";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import Success from "../components/Success";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import deleteGif from "../assets/delete.gif";
import { deleteProject, updateProject } from "../http";
import Title from "../components/Title";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
function ProjectDetailsInfo() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const data = useRouteLoaderData("projectsDetails");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [file, setFile] = useState();

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [selectedClientId, setSelectedClientId] = useState(data.client.id);
  const handleDelete = async (id) => {
    try {
      const response = await deleteProject(id);
      setShowConfirm(false);
      navigate("/home/projects");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("_method", "put");
    formData.append("name", name);
    formData.append("description", description);
    formData.append("client_id", selectedClientId);

    if (file != null) {
      formData.append("logo", file);
    }

    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Client ID:", selectedClientId);
    console.log("File:", file);

    try {
      const response = await updateProject(formData, data.id);
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating project:", error.message);
      // Display a user-friendly error message
      alert(`Failed to update project: ${error.message}`);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const formatDate = (datetime) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(datetime);
    return date.toLocaleDateString("en-US", options); // Adjust locale as needed
  };

  return (
    <div className="pt-5">
      <div className="flex">
        <img className="w-80 h-80 rounded-xl" src={data.logo} alt="Client" />
        <div className="pl-5 pt-5 pb-5 font-content text-white">
          <Title title={data.name} />
          <p className="pb-3">{data.description}</p>
          <div className="flex items-center pb-5 ">
            <img
              className="rounded-full h-10 w-10"
              src={data.client.image}
              alt="Client"
            />
            <div className="pl-2 ">
              <p className="">{data.client.name}</p>
              <p className=" ">{data.client.email}</p>
            </div>
          </div>
          <p className=" text-sm pb-3 pt-3">
            created at: {formatDate(data.created_at)}
          </p>
          <p className=" text-sm pb-3">
            last update: {formatDate(data.updated_at)}
          </p>

          <div className="flex pt-4">
            <div className="pr-5">
              <CardButton
                onClick={handleOpen}
                label={"Edit"}
                Icon={ModeEditOutlineSharpIcon}
                color={"pistach"}
              />
            </div>
            <CardButton
              onClick={() => {
                setSelectedProjectId(data.id);
                setShowConfirm(true);
              }}
              label={"Delete"}
              Icon={DeleteOutlineSharpIcon}
              color={"red-500"}
            />
          </div>
        </div>
        <div className="ml-auto">
          <Link
            to="../../"
            relative="path"
            className="text-white hover:bg-pistach"
          >
            <div>
              <ArrowCircleRightOutlinedIcon fontSize="large" />
            </div>
          </Link>
        </div>
        {showModal && (
          <Modal title="New Project" onClose={handleClose} onSave={handleSave} labelButton={"Update project"}>
            <FormModel
              label="project name:"
              id="name"
              type="text"
              defaultValue={data.name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormModel
              label="description:"
              id="description"
              type="text"
              placeholder="Enter project description"
              defaultValue={data.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Menu
              onClientSelect={setSelectedClientId}
              clientName={data.client.name}
              clientId={data.client.id}
            />
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
                  defaultValue={data.log}
                />
              </label>
            </div>
          </Modal>
        )}
      </div>

      {showConfirm && selectedProjectId && (
        <Success
          text={"Are you sure you want to delete this project?"}
          onClose={handleCancelDelete}
          Icon={CloseSharpIcon}
          gif={deleteGif}
        >
          <CardButton
            label={"Delete"}
            onClick={() => handleDelete(selectedProjectId)}
            Icon={DeleteOutlineSharpIcon}
            color={"red-500"}
          />
        </Success>
      )}

      <Form></Form>
    </div>
  );
}

export default ProjectDetailsInfo;
