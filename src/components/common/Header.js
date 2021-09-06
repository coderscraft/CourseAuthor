import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getConfig } from '../../api/authorApi'

function Header() {

  const [config, setConfig] = useState({});

  useEffect(() => {
    getConfig().then((data) => {
      setConfig(data);
      });
    }, []);

  const activeStyle = { color: "orange" };

  const bgClr = (config && config.navBarColor) || "#FF0000";

  return (
    <nav style={{height:  50, marginBottom: 60, padding: 10, background: bgClr }}>
      { config && config.courses && 
        <NavLink activeStyle={activeStyle} to="/courses">
          {`Courses   |  `}
        </NavLink>          
        }
      { config && config.authors &&
        <NavLink activeStyle={activeStyle} to="/authors">
          Authors
        </NavLink>
      }
    </nav>
  );
}

export default Header;
