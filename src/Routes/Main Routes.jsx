import { createBrowserRouter } from "react-router-dom";
import MainLaOut from "../LayOut/MainLaOut";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaOut></MainLaOut>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
      ]
    },
  ]);