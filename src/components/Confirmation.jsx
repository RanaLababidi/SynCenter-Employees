import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import success from "../assets/Animation - 1716113873825 (1).gif";

const Confirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h1 className="font-title text-3xl font-bold text-background mb-4">
          Added a new project Successfully ...
        </h1>
        <img src={success} className="w-1/3 mx-auto" alt="Success Animation" />
        <div className="flex justify-center mt-4 space-x-4">
          <ButtonComponent label="Ok" onClick={onConfirm} />
          <ButtonComponent label="Cancel" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
