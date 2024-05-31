import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import {  TbBrandBooking } from "react-icons/tb";
import { MdOutlinePreview } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { IoBagAdd } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

import logo from '../../src/assets/icon/cutlery 1.png';
import UseAdmin from "../Hooks/UseAdmin";
import UseCarts from "../Hooks/UseCarts";

export default function DashBoard() {
    const [isAdmin] = UseAdmin();
    const [carts] = UseCarts()
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-[#D1A054] p-10 ">
        <div>
            <h1 className="text-2xl font-bold">BISTRO BOSS <span className="text-lg pl-6 ">Restaurant</span></h1>
        </div>
        <ul className="space-y-4 mt-10">
            {
                isAdmin ? <>
            <li className="flex items-center gap-1">
                <FaHome />
                <NavLink to='/dashboard/userHome'>ADMIN HOME</NavLink>
            </li>
            <li className="flex items-center gap-1">
               <img className="w-4" src={logo} alt="" />
               <NavLink to='/dashboard/addItems'>
                ADD ITEMS</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <TfiMenuAlt />
                <NavLink to='/dashboard/manageItems'>MANAGE ITEMS</NavLink>
            </li>
            <li className=" flex items-center gap-1">
                <FaBook />
                <NavLink to='/dashboard/myCart'>MANAGE BOOKINGS</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <FaUsers />
                <NavLink to='users'>ALL USERS</NavLink>
            </li>

                </>
                :
                <>
                            <li className="flex items-center gap-1">
            <FaHome />
                <NavLink to='/dashboard/userHome'>USER HOME</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <IoBagAdd />
                <NavLink to='/dashboard/reservation'>RESERVATION</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <MdOutlinePayment />
                <NavLink to='/dashboard/paymentHistory'>PAYMENT HISTORY</NavLink>
            </li>
            <li className=" flex items-center gap-1">
                <FaCartShopping />
                <NavLink to='/dashboard/myCart'>MY Cart: ( {carts.length} )</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <MdOutlinePreview />
                <NavLink to='/dashboard/review'>ADD REVIEW</NavLink>
            </li>
            <li className=" flex items-center gap-1">
                <TbBrandBooking />
                <NavLink to='/dashboard/myBookings'>MY BOOKINGS</NavLink>
            </li>
                </>
            }

            <div className="border-2"></div>

            <li className="flex items-center gap-1">
                <FaHome />
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <IoMdMenu />
                <NavLink to='/order/salad'>MENU</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <FaShoppingBag />
                <NavLink to='/dashboard/shop'>SHOP</NavLink>
            </li>
            <li className="flex items-center gap-1">
                <BiSolidContact />
                <NavLink to='/dashboard/contact'>CONTACT</NavLink>
            </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>

    </div>
  )
}
