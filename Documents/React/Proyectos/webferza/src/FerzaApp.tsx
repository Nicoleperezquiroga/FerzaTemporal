import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/app.routes';

export const FerzaApp = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
