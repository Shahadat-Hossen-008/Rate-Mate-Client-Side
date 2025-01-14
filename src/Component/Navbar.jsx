import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
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
    <div className="navbar bg-base-100 shadow-sm container px-4 w-11/12 mx-auto ">
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

          
          {user  ? (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/add-job' className='justify-between'>
                  Add Job
                </Link>
              </li>
              <li>
                <Link to='/my-posted-jobs'>My Posted Services</Link>
              </li>
              <li className='mt-2'>
                <Button
                  onClick={handleSignOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </Button>
              </li>
            </ul>
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
