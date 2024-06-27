import React, { useState } from "react";
export default function CardButton ({onClick,label,Icon,color}){
    return (
         <button
        onClick={onClick}
        className={`border text-${color} border-${color}  hover:bg-${color} hover:text-white  w-20 h-10 rounded-lg`}
        >
        {label}
        {Icon && <Icon />}
        
      </button>);
}