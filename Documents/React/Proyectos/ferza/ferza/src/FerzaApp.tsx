import React from 'react'
import { RouterProvider } from 'react-router'
import { appRouter } from './app.router'

export const FerzaApp = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}
