import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md py-4">
      <Link className="p-3 font-bold" to="/">
        Home
      </Link>
      <Link className="p-3 font-bold" to="/about">
        About me
      </Link>
    </nav>
  );
};

export default Navbar;
