import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/HomePages/Home'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer/Footer'

function MainLayout () {
  return (
    <div>

    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default MainLayout