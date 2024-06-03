import React from "react";
import { Link } from "react-router-dom";

export default function NavLink  ({ to, Icon, open }){
  return (
    <>
      <div
        className={`${!open ? "flex items-center justify-center pr-3" : "hidden"}`}
      >
        <Link to={to}>
          <Icon className={`  w-10 h-10`} />
        </Link>
      </div>
      <div className={`${open ? "flex " : "hidden"}`}>
        <Link to={to} className={` ${!open && "hidden"}`}>
          <Icon className={`  w-10 h-10`} />
          {to}
        </Link>
      </div>
    </>
  );
};


