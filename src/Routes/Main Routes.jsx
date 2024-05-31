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
import AddItems from "../Dashbord/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Dashbord/ManageItems/ManageItems";
import Update from "../Dashbord/Update/Update";
import Payment from "../Dashbord/Payment/Payment";
import PaymentHistory from "../Dashbord/PaymentHistory/PaymentHistory";


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
            //normal user routes
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>,
            },
            {
                path:'cart',
                element:<Cart></Cart>,
            },
            {
                path:'payment',
                element:<Payment></Payment>,
            },
            //admin user routes
            {
                path:'addItems',
                element:<AdminRoutes><AddItems></AddItems></AdminRoutes>,
            },
            {
                path:'manageItems',
                element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>,
            },
            {
                path:'update/:id',
                element:<AdminRoutes><Update></Update></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'users',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>,
            },
        ],
    },
  ]);