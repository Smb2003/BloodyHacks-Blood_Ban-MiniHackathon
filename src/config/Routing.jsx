import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { SignUpPage } from '../pages/SignUpPage'
import { ProtectedRoute } from '../pages/ProtectedRoute'
import { AddDonor } from '../pages/AddDonor'
import { SearchBlood } from '../pages/SearchBlood'
import { AllBlood } from '../pages/AllBlood'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path='SignUpPage' element={<SignUpPage/>}/>
          <Route path='LoginPage' element={<LoginPage/>}/>

          <Route element={<ProtectedRoute/>}>
            <Route path='' element={<HomePage/>}/>
            <Route path='AddDonor' element={<AddDonor/>}/>
            <Route path='SearchBlood' element={<SearchBlood/>}/>
            <Route path='AllBlood' element={<AllBlood/>}/>
          </Route>

        </Route>
    )
) 

export const Routing = () => {
  return (
    <RouterProvider router={router}/>
  )
}
