import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        
        console.log("Sign Out Successful");
      })
      .catch((err) => {
        console.log("Error occur");
      });
  };
  
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 w-11/12 mx-auto justify-between items-center">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-14" src={logo} alt="logo" />
          <span className="font-bold font-montserrat">RateMate</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className=" mt-2 mr-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" mt-2 mr-3">
            <NavLink to="/allServices">All Service</NavLink>
          </li>

          
          {user  ? (
            <div>
              <IconButton
                
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                 <img
                 title={user?.displayName}
                  className='w-10 rounded-full'
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <Button
                  onClick={handleSignOut}
                  className='bg-gray-200 block text-right text-blue-500'
                >
                 <FaArrowRightToBracket/> Logout
                </Button>
              </Menu>
            </div>
        ):
        
        (
          <Button variant="contained">
              <Link to="/login">Login</Link>
            </Button>
        )}
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
