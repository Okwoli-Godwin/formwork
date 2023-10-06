import React from 'react'
import { useRoutes } from "react-router-dom"
import Formdetails from '../Formdetails'
import YesorNo from '../YesorNo'

const Routes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Formdetails />
        },
        {
            path: "/:id/accept",
            element: <YesorNo />
        }
    ])
  return element
}

export default Routes