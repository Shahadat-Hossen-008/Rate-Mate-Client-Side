

import logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
  
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-14" src={logo} alt="logo" />
          <span className="font-bold font-montserrat">RateMate</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allService">All Service</NavLink>
          </li>

          <Button variant="contained">
              <Link to="/login">Login</Link>
            </Button>
        </ul>

        
      </div>
    </div>
  );
};

export default Navbar;
