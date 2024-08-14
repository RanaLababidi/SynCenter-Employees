import React from "react";

export default function FormModelRequired({length, label, id, type,value,onChange,onBlur, placeholder,defaultValue }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-title font-bold block  text-background mt-3 "
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          required
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={defaultValue} 
          minLength={length}
          className=" text-black form-input mt-1 block w-full border border-background rounded-lg py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-pistach sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  ); 
}
