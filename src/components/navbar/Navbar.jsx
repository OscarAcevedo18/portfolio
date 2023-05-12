import {NavLink} from "react-router-dom";
import { useContext } from "react";

export default function Navbar() {
  const setActiveClass = ({isActive}) => (isActive? "active" : "undefined");

  return (
    <div className="nav">
      <NavLink className={setActiveClass} end to="/">
        Home 
      </NavLink>
      <NavLink className={setActiveClass} end to="/">
        About Me
      </NavLink>
    </div>
  )
};