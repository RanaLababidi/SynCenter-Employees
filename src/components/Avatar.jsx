import React from "react";
export default function Avatar ({src}){
    return(
        <img
        className="rounded-full h-8 w-8 "
        src={src}
        alt="Client"
      />
    )
}