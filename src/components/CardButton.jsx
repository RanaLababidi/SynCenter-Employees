import React, { useState } from "react";
export default function CardButton ({onClick,label,Icon,color}){
    return (
         <button
        onClick={onClick}
        className={`border text-${color} border-${color} text-customRed hover:bg-${color} hover:text-white py-2 px-4 rounded-lg`}
        >
        {label}
        {Icon && <Icon />}
        
      </button>);
}