import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export const ProtectedRoute = () => {
    const isLoggedIn = useSelector(state => state.user_data.isLoggedIn);
    console.log(isLoggedIn);
  return (
    isLoggedIn ?
    <>
       <Navbar/>
       {/* <br /> */}
        <Outlet/> 
    </> 
    :
    <>
        <Navbar/>
        <Outlet/>
        <Navigate to={"/"}/>
    </>
  )
}
