import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/HomePages/Home'
import Navbar from '../Component/Navbar'

function MainLayout () {
  return (
    <div>

    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default MainLayout