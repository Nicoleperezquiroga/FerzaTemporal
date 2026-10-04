import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const PowerBladeApp = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}
