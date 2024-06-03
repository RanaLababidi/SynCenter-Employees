import React, { useState } from "react";
import "../css/all.css";

export default function Error({ title, message, onConfirm }) {
  return (
    <div className="error  bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline">{message}</span>
      {onConfirm && (
        <div className="absolute top-0 right-0 mr-4 mt-3">
          <button
            onClick={onConfirm}
            className="text-red-700 hover:text-red-500 focus:outline-none focus:text-red-500"
          >
            <svg
              className="h-6 w-6 fill-current"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M2.293 2.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
