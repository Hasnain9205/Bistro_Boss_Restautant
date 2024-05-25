import { Link, NavLink } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react"
import { AuthContex } from "../Providers/AuthProvider"
import UseCarts from "../Hooks/UseCarts"
export default function Navbar() {
  const {user,logOut} = useContext(AuthContex)
  const [carts] = UseCarts()

  const handleLogOut = () =>{
    logOut()
  }

    const navLinks = <>
    <NavLink> <li> Home </li></NavLink>
    <NavLink> <li> CONTACT US </li></NavLink>
    <NavLink> <li> DASHBOARD </li></NavLink>
    <NavLink to='/menu'> <li> OUR MENU </li></NavLink>
    <NavLink to='/order/salad' className="flex items-center justify-center"> <li>ORDER FOOD</li>
    </NavLink>
    <NavLink to='/dashboard/cart' className='flex items-center bg-gray-500 p-3 rounded-full gap-2'>
    <FaCartShopping  className="w-6 h-6 text-center text-yellow-400"/>
    <span className=" text-white bg-red-500 p-0.5  rounded-full ">+{carts.length}</span>
    </NavLink>
    </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="ml-8">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-black">
        {
            navLinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">BISTRO BOSS 
    <span>Restaurant</span></a>
  </div>
  <div className="ml-60 hidden lg:flex items-center justify-center text-center gap-2">
    <ul className="menu menu-horizontal px-1 gap-6 items-center justify-center text-center">
    {
    navLinks
    }
    </ul>
<div>
  {
    user ? 
    <button onClick={handleLogOut} className="btn btn-warning">LogOut</button> 
    :
    <div>
    <Link to='/login'>
      <button className="bg-[#D1A054] px-6 py-2 rounded-md">Login</button>
      </Link>
      </div>
  }
</div>

  </div>
</div>
    </div>
  )
}
