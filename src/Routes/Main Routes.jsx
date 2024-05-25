import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Menu from "../Pages/MenuPages/Menu";
import OrderFood from "../Order/OrderFood";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignUp/SignUp";
import MainLayout from "../LayOut/MainLayout";
import Cart from "../Dashbord/Cart";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Dashbord/Dashboard";
import AllUsers from "../Dashbord/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
            path:"/order/:category",
            element: <OrderFood></OrderFood>,
        },
        {
            path:"/login",
            element: <Login></Login>,
        },
        {
            path:"/signUp",
            element: <SignUp></SignUp>,
        },
      ],
    },
    {
        path:"dashboard",
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>,
            },
            //admin routes
            {
                path:'users',
                element:<AllUsers></AllUsers>,
            },
        ],
    },
  ]);