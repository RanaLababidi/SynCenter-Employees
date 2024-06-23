import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import FormModel from "../components/FormModel";
import success from "../assets/Animation - 1716113873825 (1).gif";

const Success = ({ title, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };
  return (
    <div className="fixed inset-0 ">
      <div className="flex items-center justify-center  px-4 pt-4 pb-20 text-center">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className=" sm:p-6 sm:pb-4 inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
       
          <img src={success} className="w-1/3 mx-auto" alt="Forgot Password" />
          <h1 className="font-title text-center mb-2 text-3xl font-bold leading-9 tracking-tight text-background">
            Added a new project Successfully ...
          </h1>
          <div className="flex justify-between items-center">
            <ButtonComponent label="close" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
