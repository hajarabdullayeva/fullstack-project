import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        width: "100vw", padding: "20px", fontSize: "20px", background: "black",
        color: "white", display: "flex", gap: 10, alignItems: "center", justifyContent: 'center'
      }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;
