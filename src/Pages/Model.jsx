import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../components/ButtonComponent";
const Modal = ({ title, onClose, onSave, children,labelButton }) => {
  return (
    <div className="fixed inset-0 ">
      <div className="flex items-center justify-center  px-4 pt-4 pb-20 text-center">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div
          className=" sm:p-6 sm:pb-4 inline-block align-botto
         bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className=" font-title font-bold  text-black " id="modal-title">
              {title}
            </h3>
            <div className="inline ">
              <button type="button" onClick={onClose}>
                <CloseIcon className="text-background" />
              </button>
            </div>
          </div>
          <form onSubmit={onSave}>
          <div className="">{children}</div>
          
            <div className="flex justify-between items-center">
              <ButtonComponent label={labelButton} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;