import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav style={{height:  50, marginBottom: 60, padding: 10, background: "#D3D3D3" }}>
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/authors">
        Authors
      </NavLink>
    </nav>
  );
}

export default Header;
