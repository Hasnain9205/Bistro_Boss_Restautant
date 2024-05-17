import { createBrowserRouter } from "react-router-dom";
import MainLaOut from "../LayOut/MainLaOut";
import Home from "../Pages/HomePage/Home";
import Menu from "../Pages/MenuPages/Menu";
import Order from "../Order/OrderFood";
import OrderFood from "../Order/OrderFood";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaOut></MainLaOut>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/menu",
            element: <Menu></Menu>,
        },
        {
            path:"/order",
            element: <OrderFood></OrderFood>,
        },
      ]
    },
  ]);