import React from "react";

export default function FormComponent({ label, id, type }) {
  return (
    <div>
      <label htmlFor={id} className="  font-content block text-sm text-white">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          required
          className="block w-full rounded-lg py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-pistach sm:text-sm sm:leading-6 blur-bg"
        />
      </div>
    </div>
  );
}



